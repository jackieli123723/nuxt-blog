importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08a84ff6435dcb2de6b8.css",
    "revision": "0a61d280f6be3739ee037c8d36162a0a"
  },
  {
    "url": "/_nuxt/10e001bd2a6e7876705f.css",
    "revision": "65f8ed3cbaae52d370560518fca0c0ba"
  },
  {
    "url": "/_nuxt/26c665a2987e377a19a2.js",
    "revision": "5473c306ae171c6dd4b8f5dd9de0f01d"
  },
  {
    "url": "/_nuxt/3fe75e79602dff6fd325.css",
    "revision": "6cdcbbb451a77e338f77790e4f89b0d5"
  },
  {
    "url": "/_nuxt/41dc379b2dd04392c13b.js",
    "revision": "ffef4eaf5ab20b403201dec51c255c56"
  },
  {
    "url": "/_nuxt/5ab705c4167d2e48da45.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "/_nuxt/5ca648c970d40a7001e0.css",
    "revision": "eb279fbc04c5919a6f5063284738cc76"
  },
  {
    "url": "/_nuxt/62c1929cfe14b7dd61db.js",
    "revision": "e8905deb76237d5a2c748a11443a0d39"
  },
  {
    "url": "/_nuxt/65e4c91d01cd3b66562e.js",
    "revision": "75d89b40d72ac7fb570c6c5586744c32"
  },
  {
    "url": "/_nuxt/6cb3d22422d3e5fae7d6.css",
    "revision": "8ce8bd4f1519d055afd4aedf3148b697"
  },
  {
    "url": "/_nuxt/8e06821378ad7751285a.js",
    "revision": "800b5354077ee2c332931e5b18aafaee"
  },
  {
    "url": "/_nuxt/a834190639f931699162.js",
    "revision": "73e8e92917078c440f410581e993cbf6"
  },
  {
    "url": "/_nuxt/ae4f9a4698c4afae0c10.js",
    "revision": "9c3793bb13e502c2c349be3eb1a6f269"
  },
  {
    "url": "/_nuxt/b69b02d7f8e02d35157f.css",
    "revision": "6ca35a3a197cadc6d46051d1bee11b6b"
  },
  {
    "url": "/_nuxt/c4d0f6b068222dcf3e9d.css",
    "revision": "7b476bead58c5018de5f49c12d3d3d1a"
  },
  {
    "url": "/_nuxt/c77bb44da96a5622ea0e.js",
    "revision": "2fcedbc01ee413d9155f808ddee32757"
  },
  {
    "url": "/_nuxt/c850c9e91f35415ba8fa.js",
    "revision": "9f172be2c0f7502e69dffe741d8af32e"
  },
  {
    "url": "/_nuxt/c924e13cc1a6a083fe34.css",
    "revision": "e99645c02e372bdd5d3618f0a11281ad"
  },
  {
    "url": "/_nuxt/c97b07316667e44a9118.css",
    "revision": "33ea71e25f9810fd9c8c4d33f6ce6ad3"
  },
  {
    "url": "/_nuxt/cbb79f2dc90ad6524a7e.js",
    "revision": "3cfa87d74ed4cda4013d9a1399d5af39"
  },
  {
    "url": "/_nuxt/ce27686882f96551a564.js",
    "revision": "d01ad5dc70c0872491561983c5d6e212"
  },
  {
    "url": "/_nuxt/d870de43926a444270d6.js",
    "revision": "7b514cc568073d1dda5f2746cd3c48db"
  },
  {
    "url": "/_nuxt/df6fa2d429c1b3bed349.js",
    "revision": "c2d10e409704f32974f345851be90d3a"
  },
  {
    "url": "/_nuxt/dfe86be5c98a8a19b9cc.css",
    "revision": "1d3bde8c07ccbe42a72ed1772278ed86"
  },
  {
    "url": "/_nuxt/e4fb4eb0ae13f8d0d258.js",
    "revision": "78aa022bf0278bde510ae6abdfd6778c"
  },
  {
    "url": "/_nuxt/e7a05c62286279ddfc77.css",
    "revision": "8d97c140f3c3fa1851056d488a0b365c"
  },
  {
    "url": "/_nuxt/f6ed847b36f599ea9c0c.js",
    "revision": "3d18cae7a8f9389554c947067340b383"
  },
  {
    "url": "/_nuxt/f788a29c8862ea12d6a8.js",
    "revision": "422c8b261f76f76d440d29f5ce334436"
  }
], {
  "cacheId": "nuxt-blog",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





