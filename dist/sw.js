"use strict";

var CACHE_NAME = 'cache-v1';
var filesToCache = ["index.html"];

self.addEventListener("install", function (event) {
    event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
        console.log("Cache opeened");
        return cache.addAll(filesToCache);
    }));
});

self.addEventListener("fetch", function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
        if (response) return response;

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(function (response) {
            if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }

            var responseToCache = response.clone();
            caches.open(CACHE_NAME).then(function (cache) {
                cache.put(event.request, responseToCache);
            });

            return response;
        });
    }));
});

self.addEventListener("activate", function () {});
//# sourceMappingURL=sw.js.map