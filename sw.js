'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","style.css"]);

toolbox.router.get('/eng/image/*', toolbox.cacheFirst);

toolbox.router.get('/eng/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});