# Angular PWA Proof of Concept

A Progressive Web App (PWA) built with Angular demonstrating modern web app capabilities including offline support, installability, and service worker features.

## 🚀 Features

### Core PWA Features
- **📱 Installable**: Add to home screen functionality
- **⚡ Service Worker**: Automatic caching and offline support
- **🔄 Auto Updates**: Automatic update detection and prompts
- **📡 Offline Support**: Works without internet connection
- **🎨 Responsive Design**: Optimized for all devices

### Technical Features
- **Angular 18+**: Latest Angular framework
- **TypeScript**: Type-safe development
- **Angular Service Worker**: Built-in PWA support
- **Modern CSS**: Responsive design with CSS Grid and Flexbox
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🛠️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/           # Home page component
│   │   └── about/          # About page component
│   ├── services/
│   │   └── pwa.service.ts  # PWA functionality service
│   ├── app.component.*     # Root component with navigation
│   └── app.routes.ts       # Application routing
├── public/
│   ├── icons/              # PWA icons (various sizes)
│   └── manifest.webmanifest # Web App Manifest
└── ngsw-config.json        # Service Worker configuration
```

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

## 🔧 Installation & Setup

1. **Clone or download the project**
   ```bash
   cd angular-pwa-poc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build for production** (Required for PWA features)
   ```bash
   ng build --configuration=production
   ```

4. **Serve the built application**
   ```bash
   # Install http-server globally if not already installed
   npm install -g http-server
   
   # Navigate to build directory
   cd dist/angular-pwa-poc
   
   # Start server (PWA features only work over HTTPS or localhost)
   http-server -p 8080 -c-1
   ```

5. **Access the application**
   Open http://localhost:8080 in your browser

## 🧪 Testing PWA Features

### 1. Install Prompt
- Open the app in Chrome/Edge
- Look for the install button in the address bar or on the home page
- Click "Install App" to add to home screen

### 2. Offline Functionality
- With the app loaded, disconnect from the internet
- Navigate between pages - the app should still work
- Refresh the page - it should load from cache

### 3. Service Worker Updates
- Make changes to the app and rebuild
- Deploy the new version
- The app will detect updates and prompt to reload

### 4. Responsive Design
- Test on different screen sizes
- Use browser dev tools to simulate mobile devices

## 🌐 Live Testing

The PWA is currently served at: http://localhost:8080

**Note**: PWA features like service workers only work over HTTPS in production or localhost in development.

## 📱 PWA Checklist

✅ **Web App Manifest**: Configured with app metadata and icons  
✅ **Service Worker**: Handles caching and offline functionality  
✅ **HTTPS**: Required for production (localhost is fine for development)  
✅ **Responsive Design**: Works on all device sizes  
✅ **Fast Loading**: Optimized with caching strategies  
✅ **Offline Fallback**: Basic offline functionality  
✅ **Installable**: Can be added to home screen  
✅ **App-like Navigation**: Standalone display mode  

## 🔍 Key Files Explained

### `public/manifest.webmanifest`
Defines the app's metadata, icons, and display preferences for installation.

### `ngsw-config.json`
Configures the Angular Service Worker with caching strategies:
- **App Shell**: Cached on install for instant loading
- **Static Assets**: Lazy loaded and cached
- **API Responses**: Configurable caching strategies

### `src/app/services/pwa.ts`
Service handling PWA-specific functionality:
- Update detection and prompts
- Install prompt management
- Service worker status monitoring

## 🚀 Deployment

For production deployment:

1. **Build the application**
   ```bash
   ng build --configuration=production
   ```

2. **Deploy to HTTPS hosting** (Required for PWA features)
   - Netlify, Vercel, Firebase Hosting, etc.
   - Ensure all files in `dist/angular-pwa-poc` are deployed

3. **Test PWA features** on the live URL

## 🎯 Next Steps

Potential enhancements for this POC:
- Add push notifications
- Implement background sync
- Add offline data storage with IndexedDB
- Include more advanced caching strategies
- Add performance monitoring
- Implement web share API

## 📚 Resources

- [Angular PWA Guide](https://angular.io/guide/service-worker-getting-started)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [PWA Checklist](https://web.dev/pwa-checklist/)

## 🤝 Contributing

This is a proof of concept project. Feel free to:
- Report issues
- Suggest improvements
- Add new PWA features
- Enhance the UI/UX

---

**Built with ❤️ using Angular and PWA technologies**
