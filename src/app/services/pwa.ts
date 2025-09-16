import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Pwa {
  promptEvent: any;

  constructor(private readonly swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      // Check for app updates
      swUpdate.versionUpdates.pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        map(evt => ({
          type: 'UPDATE_AVAILABLE',
          current: evt.currentVersion,
          available: evt.latestVersion,
        }))
      ).subscribe(evt => {
        if (confirm('New version available. Load it?')) {
          window.location.reload();
        }
      });
    }
  }

  checkForUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate();
    }
  }

  // Handle install prompt
  showInstallPrompt() {
    if (this.promptEvent) {
      this.promptEvent.prompt();
      this.promptEvent.userChoice.then((result: any) => {
        console.log('User choice:', result);
        this.promptEvent = null;
      });
    }
  }

  // Check if app is installable
  isInstallable(): boolean {
    return !!this.promptEvent;
  }
}
