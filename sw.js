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
    "url": "angka.html",
    "revision": "0e1d19ac32955a568e2f0477146c33dd"
  },
  {
    "url": "css/add2number.css",
    "revision": "6e7769c1c35cc3d238ce89134bd9f342"
  },
  {
    "url": "css/mygrid.css",
    "revision": "da4a4ae1562f1d173a40e6dd665d5d98"
  },
  {
    "url": "css/peta.css",
    "revision": "0fea547c1bad2c0d7201cd8110f12ba2"
  },
  {
    "url": "data/catatan.json",
    "revision": "056de33f2b616f52ac322a3258bf0096"
  },
  {
    "url": "data/peta.json",
    "revision": "8ae39fb78c5e53750a03b277e767420e"
  },
  {
    "url": "index.html",
    "revision": "0d9dca6ba7e9bfce62000400cac45195"
  },
  {
    "url": "js/add2number.js",
    "revision": "323e3a986064eda2cda776bd971ffcee"
  },
  {
    "url": "js/peta.js",
    "revision": "a204624cd4402a65669110ad0fbd5003"
  },
  {
    "url": "js/readnote.js",
    "revision": "9e6a5c20d96f0deb2880386ac69cd05d"
  },
  {
    "url": "npm-debug.log",
    "revision": "214b1f6e5f461c6b0560c51a9896aad8"
  },
  {
    "url": "peta.html",
    "revision": "1b6f3c2e28d4e67f0092a7fc81d197ca"
  },
  {
    "url": "profil.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "readnote.html",
    "revision": "4bfe36ef23ef69b440bb09277c6abf5d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
