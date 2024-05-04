// service-worker.js

const CACHE_NAME = "my-site-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/files/css/style.css",
  "/files/css/style2.css",
  "/files/icons/discord-icon.svg",
  "/files/icons/github-icon.svg",
  "/files/icons/gmail-icon.svg",
  "/files/icons/icon.svg",
  "/files/icons/icon2.svg",
  "/files/icons/linkedin-icon.svg",
  "/files/icons/youtube-icon.svg",
  "/files/images/IMG_2983.jpg",
  "/files/images/profilna.jpeg",
  "/files/js/script.js",
  "/files/js/splittext.js",
  "/files/js/splittext.min.js",
];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
