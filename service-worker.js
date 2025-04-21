const CACHE_NAME = 'asad-portfolio-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/projects.html',
    '/assets/css/style.css',
    '/assets/css/aos.css',
    '/assets/js/script.js',
    '/assets/js/aos.js',
    '/assets/images/avatar.jpg',
    '/assets/images/signature.png',
    '/assets/images/project1.svg',
    '/assets/images/project2.svg',
    '/assets/images/project3.svg',
    '/assets/images/project4.svg',
    '/assets/favicon_io/favicon.ico',
    '/assets/favicon_io/android-chrome-192x192.png',
    '/assets/favicon_io/android-chrome-512x512.png',
    'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    });
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});