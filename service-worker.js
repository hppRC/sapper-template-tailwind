!function(){"use strict";const e=["/client/client.c6cd84ac.js","/client/index.1b0db199.js","/client/about.d87bc560.js"].concat(["/service-worker-index.html","/favicon.ico","/global.css","/images/icon.png","/images/icons/icon-128x128.png","/images/icons/icon-144x144.png","/images/icons/icon-152x152.png","/images/icons/icon-192x192.png","/images/icons/icon-384x384.png","/images/icons/icon-512x512.png","/images/icons/icon-72x72.png","/images/icons/icon-96x96.png","/images/ogp.png","/index.css","/manifest.json","/sitemap.xml"]),n=new Set(e);self.addEventListener("install",n=>{n.waitUntil(caches.open("cache1602774601855").then(n=>n.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)"cache1602774601855"!==n&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&n.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1602774601855").then(async n=>{try{const t=await fetch(e.request);return n.put(e.request,t.clone()),t}catch(t){const s=await n.match(e.request);if(s)return s;throw t}}))))})}();
