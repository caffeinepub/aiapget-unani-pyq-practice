# Specification

## Summary
**Goal:** Upgrade the AIAPGET Unani PYQ frontend into a Progressive Web App (PWA) so users can install it on their mobile home screen and use it offline.

**Planned changes:**
- Add a `manifest.json` in `frontend/public` with app name, short name, start URL, standalone display mode, parchment background color, deep teal theme color, and icon references (192x192 and 512x512)
- Link the manifest in `frontend/index.html` via `<link rel="manifest">`
- Add iOS PWA meta tags to `frontend/index.html`: `apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`, `apple-mobile-web-app-title`, `apple-touch-icon`, and `theme-color`
- Register a service worker (`sw.js`) in `frontend/public` and wire up registration in the app entry point
- Implement cache-first strategy for static assets and network-first for API/canister calls in the service worker
- Add PWA icon assets (`icon-192.png` and `icon-512.png`) to `frontend/public/assets/generated/`

**User-visible outcome:** Users on Android (Chrome) and iOS (Safari) can install the app to their home screen and launch it in standalone mode. The app shell loads correctly when offline, and canister calls fail gracefully without network.
