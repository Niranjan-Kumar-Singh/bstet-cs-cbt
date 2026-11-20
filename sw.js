/**
 * Service Worker - Bihar STET CBT Portal
 * Cache-first offline capability with network fallback and versioned cache management.
 */

const CACHE_NAME = 'bstet-cbt-20261120_4fd212';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/og-preview.svg',
  '/og-preview.png',
  '/css/tokens.css',
  '/css/base.css',
  '/css/components.css',
  '/css/lobby.css',
  '/css/exam.css',
  '/css/result.css',
  '/css/dashboard.css',
  '/css/print.css',
  '/js/main.js',
  '/js/app.js',
  '/js/i18n.js',
  '/js/exam-engine.js',
  '/js/analytics.js',
  '/js/core/store.js',
  '/js/core/router.js',
  '/js/core/theme.js',
  '/js/core/a11y.js',
  '/js/core/utils.js',
  '/js/core/errors.js',
  '/js/components/paper-card.js',
  '/js/components/palette.js',
  '/js/components/timer.js',
  '/js/components/charts.js',
  '/js/data/papers-index.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Only handle GET requests from http / https
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  // Network-first for HTML navigation, cache-first for static assets
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      });
    })
  );
});
