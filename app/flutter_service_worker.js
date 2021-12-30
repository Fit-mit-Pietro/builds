'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7f2e19f8edf6195a6651f493505cdbb0",
"assets/assets/fonts/LexendDeca/LexendDeca-Black.ttf": "726b619c302031b7bae6c63a5938e9a6",
"assets/assets/fonts/LexendDeca/LexendDeca-Bold.ttf": "500804705a4b5fe2cc07a03f2723401b",
"assets/assets/fonts/LexendDeca/LexendDeca-ExtraBold.ttf": "81785cea8331d653997b64455734502c",
"assets/assets/fonts/LexendDeca/LexendDeca-ExtraLight.ttf": "af6a0aad68b315e1d0298dd5e86424c6",
"assets/assets/fonts/LexendDeca/LexendDeca-Light.ttf": "121c9680106753ae1e9f57e2f47c6f8f",
"assets/assets/fonts/LexendDeca/LexendDeca-Medium.ttf": "dc2cf8ed63830eae7e97aa648c44dbdd",
"assets/assets/fonts/LexendDeca/LexendDeca-Regular.ttf": "8a9ae28cfa1ac712747029a70bcd06ea",
"assets/assets/fonts/LexendDeca/LexendDeca-SemiBold.ttf": "029ee689c544c5ae47bdcb42894ea3dc",
"assets/assets/fonts/LexendDeca/LexendDeca-Thin.ttf": "b0483034d6e404b996ebf1fcbecb737a",
"assets/assets/fonts/Quicksand/Quicksand-Bold.ttf": "05fcffc56e72bc6889ecea672078dc4f",
"assets/assets/fonts/Quicksand/Quicksand-Light.ttf": "10ce81d2a0fc09f271edf43e66d80301",
"assets/assets/fonts/Quicksand/Quicksand-Medium.ttf": "db0ad2fc713ab72ea682687be4bd1021",
"assets/assets/fonts/Quicksand/Quicksand-Regular.ttf": "6cbafd2cb6e973c96ade779edc39c62a",
"assets/assets/fonts/Quicksand/Quicksand-SemiBold.ttf": "9e7757030c60a7a6973c9a95d9cea1c0",
"assets/assets/img/body_back_bg.png": "89787fdb88efaf6b924636e81bb2278c",
"assets/assets/img/body_back_svg.svg": "4db406e93de66722c8a7df14973b56c4",
"assets/assets/img/body_front_bg.png": "81ef75a74b48bc3886e6c5e2b6fc3fe2",
"assets/assets/img/body_front_svg.svg": "4856652f6ecced13215bd4e0674afdee",
"assets/assets/img/fmp_logo.png": "e4cfde1d9c7a394f26b5db1dabaf31fb",
"assets/assets/img/undraw_finish_line.png": "9147fef4716901d0da9b9640a102f3c1",
"assets/FontManifest.json": "8e961f11119d1b97db42e967ea9e50ec",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7bbdc63f40d5f9ec9895e6fe472d78a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fmp_common/assets/fonts/LexendDeca/LexendDeca-Black.ttf": "726b619c302031b7bae6c63a5938e9a6",
"assets/packages/fmp_common/assets/fonts/LexendDeca/LexendDeca-Bold.ttf": "500804705a4b5fe2cc07a03f2723401b",
"assets/packages/fmp_common/assets/fonts/LexendDeca/LexendDeca-ExtraBold.ttf": "81785cea8331d653997b64455734502c",
"assets/packages/fmp_common/assets/fonts/LexendDeca/LexendDeca-ExtraLight.ttf": "af6a0aad68b315e1d0298dd5e86424c6",
"assets/packages/fmp_common/assets/fonts/LexendDeca/LexendDeca-Light.ttf": "121c9680106753ae1e9f57e2f47c6f8f",
"assets/packages/fmp_common/assets/fonts/LexendDeca/LexendDeca-Medium.ttf": "dc2cf8ed63830eae7e97aa648c44dbdd",
"assets/packages/fmp_common/assets/fonts/LexendDeca/LexendDeca-Regular.ttf": "8a9ae28cfa1ac712747029a70bcd06ea",
"assets/packages/fmp_common/assets/fonts/LexendDeca/LexendDeca-SemiBold.ttf": "029ee689c544c5ae47bdcb42894ea3dc",
"assets/packages/fmp_common/assets/fonts/LexendDeca/LexendDeca-Thin.ttf": "b0483034d6e404b996ebf1fcbecb737a",
"assets/packages/fmp_common/assets/fonts/Quicksand/Quicksand-Bold.ttf": "05fcffc56e72bc6889ecea672078dc4f",
"assets/packages/fmp_common/assets/fonts/Quicksand/Quicksand-Light.ttf": "10ce81d2a0fc09f271edf43e66d80301",
"assets/packages/fmp_common/assets/fonts/Quicksand/Quicksand-Medium.ttf": "db0ad2fc713ab72ea682687be4bd1021",
"assets/packages/fmp_common/assets/fonts/Quicksand/Quicksand-Regular.ttf": "6cbafd2cb6e973c96ade779edc39c62a",
"assets/packages/fmp_common/assets/fonts/Quicksand/Quicksand-SemiBold.ttf": "9e7757030c60a7a6973c9a95d9cea1c0",
"assets/packages/fmp_common/assets/img/body_back_svg.svg": "4db406e93de66722c8a7df14973b56c4",
"assets/packages/fmp_common/assets/img/body_front_svg.svg": "4856652f6ecced13215bd4e0674afdee",
"assets/packages/fmp_common/assets/img/fmp_logo.png": "e4cfde1d9c7a394f26b5db1dabaf31fb",
"assets/packages/fmp_common/assets/img/undraw_finish_line.png": "9147fef4716901d0da9b9640a102f3c1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1c6de603f4db29fae47f54daa937930e",
"/": "1c6de603f4db29fae47f54daa937930e",
"main.dart.js": "13cc38c063f0e5b17014606f4e0e2c73",
"manifest.json": "9ad36eeed81c1d592e1092b80aefa0e7",
"version.json": "8cd497d1288993fca08d93f81f777839"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
