importScripts('/_nuxt/workbox.678c6960.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/28260d2583f1275e5b47.css",
    "revision": "65f8ed3cbaae52d370560518fca0c0ba"
  },
  {
    "url": "/_nuxt/2e21a61718666bcc242e.js",
    "revision": "4ce0f2e517f775fd0e5f98dfff5a4e41"
  },
  {
    "url": "/_nuxt/31157db55486ef7a71a5.css",
    "revision": "0a61d280f6be3739ee037c8d36162a0a"
  },
  {
    "url": "/_nuxt/32919792f50f752bc5a2.css",
    "revision": "eb279fbc04c5919a6f5063284738cc76"
  },
  {
    "url": "/_nuxt/489067b65d04cd82fe02.css",
    "revision": "6c1f7ba527457ed9e16910c8ab984917"
  },
  {
    "url": "/_nuxt/4e3351d7869b7a98266f.js",
    "revision": "6ea250ae7a515b746df771a5105bce34"
  },
  {
    "url": "/_nuxt/52896d593e4cdd4f6c85.js",
    "revision": "4af7c96f2d128027255eb662d630a03a"
  },
  {
    "url": "/_nuxt/5963017e66c5c2a75660.css",
    "revision": "8ce8bd4f1519d055afd4aedf3148b697"
  },
  {
    "url": "/_nuxt/5a481f7c32230027b10e.css",
    "revision": "7b476bead58c5018de5f49c12d3d3d1a"
  },
  {
    "url": "/_nuxt/5c0fa1a32ebe2b6f5d6d.js",
    "revision": "83a2435cca3baa9d04f7e73479213240"
  },
  {
    "url": "/_nuxt/6d98b8a092cb268f4b5c.js",
    "revision": "41e4ebe4b151312556ca306a4ae1881d"
  },
  {
    "url": "/_nuxt/7940c6b923a25bd77e0e.js",
    "revision": "fbc113cce2e3fdd4128d16c7044dbefc"
  },
  {
    "url": "/_nuxt/7b4d53d110e9c13c95fd.css",
    "revision": "91a02ad2577487a2dbb9b1c491971588"
  },
  {
    "url": "/_nuxt/7ba0f68531dfcfb16e8b.js",
    "revision": "143666b5104cd233c51c704caf0c0f98"
  },
  {
    "url": "/_nuxt/83ac3be3b624cbf4f977.css",
    "revision": "0784e2c4195c8abd2246a00f21ea5fa9"
  },
  {
    "url": "/_nuxt/9ef67f80d13cd6d24814.css",
    "revision": "c93e451cb2f5fd60207e7f7704428e77"
  },
  {
    "url": "/_nuxt/9f96e536e7ac50371dae.js",
    "revision": "17e569c319398b893dc3220effe47386"
  },
  {
    "url": "/_nuxt/a522761b4334c20c5444.css",
    "revision": "69026ce2d015cc0ef993e0528eea7935"
  },
  {
    "url": "/_nuxt/a772c724e394d138a900.js",
    "revision": "87d68642c5feade54388dc0e89cd855b"
  },
  {
    "url": "/_nuxt/b1fdd3c7fe9e0bbdbc35.css",
    "revision": "6d582c48a52d1281388be98b5bf1f5b4"
  },
  {
    "url": "/_nuxt/b5fdfd1f159bcf6fc5ef.css",
    "revision": "33ea71e25f9810fd9c8c4d33f6ce6ad3"
  },
  {
    "url": "/_nuxt/e31d0edc8ec08b1c10de.js",
    "revision": "1364f8c015fd63263b37e151beee60a2"
  },
  {
    "url": "/_nuxt/e54408a836d8e6cb36d0.js",
    "revision": "3b91fc9060a608ea0b8766f184ad32f1"
  },
  {
    "url": "/_nuxt/e6b021bf4db1d2b7f6e2.js",
    "revision": "c2e00bd032a8d6d3cb60658a03dc4924"
  },
  {
    "url": "/_nuxt/e9d5f0dad5080a94fd3e.js",
    "revision": "44fbbe163165bd796211875cdc014b81"
  },
  {
    "url": "/_nuxt/ed890d9628bf36b55dc1.js",
    "revision": "75cb8ea7aa5037dc3984be0c6aac4837"
  },
  {
    "url": "/_nuxt/f882d1f979383970f553.js",
    "revision": "1f45ffb0ec7a449f72f682163df2d910"
  },
  {
    "url": "/_nuxt/f932253b083b648d2ed8.js",
    "revision": "467eee7bf8a4d5a22dc9ac907400766f"
  },
  {
    "url": "/_nuxt/fbf36d133d51283712d5.js",
    "revision": "a682f215378e3b9e2e8c951aee0dfc9a"
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
