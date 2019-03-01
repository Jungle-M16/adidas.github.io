importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0bc989664d39398d8f1c.js",
    "revision": "4e98cdac8f86cbc087172253d714b7bf"
  },
  {
    "url": "/_nuxt/1d831b2c37e00f3226e2.js",
    "revision": "0aedcf1081d2b3b3e1c7be1f971cdd96"
  },
  {
    "url": "/_nuxt/246cfd6ac1ac90f4eee8.css",
    "revision": "4abe2a73f9ec32fcef618388e2d3fe5b"
  },
  {
    "url": "/_nuxt/258e256b6e87f0054fda.css",
    "revision": "ed57c4bbaa04e3b6e99553d8b0ef94e2"
  },
  {
    "url": "/_nuxt/28b3a41f7a56f8e99ea8.js",
    "revision": "4740578118f932c27d24074fec7c0448"
  },
  {
    "url": "/_nuxt/3eecb02ae967a1f7ffe8.css",
    "revision": "4f0f09191b778e1aa7b94f26a4fe8f42"
  },
  {
    "url": "/_nuxt/53b8b09b2506b278573d.js",
    "revision": "1028b28b4f62f8b969c89946205e6de1"
  },
  {
    "url": "/_nuxt/62e05de18c742d1e67d3.js",
    "revision": "4f12293ac1d000aa9193c16b343ff63c"
  },
  {
    "url": "/_nuxt/8b537ac01c0eaf57105b.js",
    "revision": "af84a33fe51919674e984d19eb0c6217"
  },
  {
    "url": "/_nuxt/9376cba188c59073de41.js",
    "revision": "d8133ce9d9be815873e81b2505ef1c1a"
  },
  {
    "url": "/_nuxt/ad5a60aa879fae3a0ccd.js",
    "revision": "bc98bd8c27d2e2c12ea94d1cce68cf7d"
  },
  {
    "url": "/_nuxt/ad7125b20431b7ddbbe0.css",
    "revision": "6aa4f359bc71497c736030f1d4e602de"
  },
  {
    "url": "/_nuxt/dc0d8686126c68901b47.js",
    "revision": "07104a2ee43e92c826f28b987f9476a9"
  },
  {
    "url": "/_nuxt/df1bc33cbdf83c8a29b2.js",
    "revision": "ed893fcfde1a5f31bdc0c42c1b00b9ba"
  },
  {
    "url": "/_nuxt/f960508ad3b4c5126cee.js",
    "revision": "708b7e42ab923aa4cb7ad7cbe1744b92"
  }
], {
  "cacheId": "adidas-github-io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
