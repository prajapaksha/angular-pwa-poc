import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';
import { Pwa } from '../services/pwa';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  isOnline = navigator.onLine;
  swActive = false;

  constructor(
    public pwaService: Pwa,
    private readonly swUpdate: SwUpdate
  ) {
    // Listen to online/offline events
    window.addEventListener('online', () => {
      this.isOnline = true;
    });
    
    window.addEventListener('offline', () => {
      this.isOnline = false;
    });

    // Listen for install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.pwaService.promptEvent = e;
    });
  }

  ngOnInit() {
    // Check if service worker is active
    if (this.swUpdate.isEnabled) {
      this.swActive = true;
    }
  }

  checkForUpdates() {
    this.pwaService.checkForUpdates();
  }
}
