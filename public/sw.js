/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a27a4163254fc8fce870c8cc3a3f94f"
  },
  {
    "url": "contoh.js",
    "revision": "6077caf0b82c7b4031eef598b7f82f86"
  },
  {
    "url": "data/peta.json",
    "revision": "9c1d6f2c3c8446aa9e6f97c92bac95c2"
  },
  {
    "url": "girl.png",
    "revision": "c49a972fc128aa358f6e280422f56207"
  },
  {
    "url": "hitung.html",
    "revision": "2dbacd10a26f12097ffcbe582c8e3216"
  },
  {
    "url": "img/1.jpg",
    "revision": "2b37cdb7f6e58fc5e43e864f26bbf8fa"
  },
  {
    "url": "img/2.jpg",
    "revision": "f1f0d06af32e2da44fa033032f44e016"
  },
  {
    "url": "img/3.jpg",
    "revision": "ed8a6279bce0f3a84edba30daa21169a"
  },
  {
    "url": "img/4.jpg",
    "revision": "141880122a196c28374e8bcfe24d818f"
  },
  {
    "url": "img/5.jpg",
    "revision": "aaa881e455a4e81393b4e1a53f6fe8d5"
  },
  {
    "url": "img/girl.png",
    "revision": "15f37806c92ee76477bd3d2a6ae1cfba"
  },
  {
    "url": "img/girl2.png",
    "revision": "c49a972fc128aa358f6e280422f56207"
  },
  {
    "url": "img/makana.jpeg",
    "revision": "3a77894c9ab9744e1500024b063c2a4d"
  },
  {
    "url": "img/user.png",
    "revision": "e74e29333dd86c013990bc6c80e2f92b"
  },
  {
    "url": "index.html",
    "revision": "0d898bf8652fbe4825dd24b651060759"
  },
  {
    "url": "index2.html",
    "revision": "ac90fa151eb68f6ed03e08dea78e8771"
  },
  {
    "url": "js/peta.js",
    "revision": "53e4f61adffadd0a43efcfc5ca8c6526"
  },
  {
    "url": "js/peta2.js",
    "revision": "e359d66867c91807e7d7f9dcbfe91d9f"
  },
  {
    "url": "mygrid.css",
    "revision": "0b7623e48a2b390166630b7543226cbf"
  },
  {
    "url": "mygrid.js",
    "revision": "541addbc686d9e107ee19f7030b593f2"
  },
  {
    "url": "package-lock.json",
    "revision": "5c3865c23722f49247096d24c5de0e2a"
  },
  {
    "url": "peta.html",
    "revision": "180dde2e677970890de1ac24ed104ce3"
  },
  {
    "url": "petajson.html",
    "revision": "026fb5f0605e080f586794e61640702d"
  },
  {
    "url": "profile.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
