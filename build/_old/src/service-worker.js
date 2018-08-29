"use strict";var precacheConfig=[["/fonts/cutive-v9-latin-regular.eot","9ce1266e606491734a955f00ce9799e1"],["/fonts/cutive-v9-latin-regular.svg","14eec75a1dc04403f7230bc34997f7a2"],["/fonts/cutive-v9-latin-regular.ttf","235f4c09614378bb3b21494f0e37a463"],["/fonts/cutive-v9-latin-regular.woff","3f366d62327674d570bfc2bc43df2114"],["/fonts/cutive-v9-latin-regular.woff2","a27f53ae1c6204c7ca7a0bbe1e6bdbe5"],["/fonts/lato-v14-latin-regular.eot","6a6d715087a68ac5ad790b4f7bbb1766"],["/fonts/lato-v14-latin-regular.svg","9087e4a6aceecc9b2914823044951a3a"],["/fonts/lato-v14-latin-regular.ttf","da4b79be8c588f56351e4d6368fcdbe1"],["/fonts/lato-v14-latin-regular.woff","62fb51e9e645f63599238881b9de15dd"],["/fonts/lato-v14-latin-regular.woff2","f1a4a058fbba1e35a406188ae7eddaf8"],["/fonts/oswald-v16-latin-regular.eot","9f732316066bd82f6d66c4f9de79ecfe"],["/fonts/oswald-v16-latin-regular.svg","d7b814180b54a01b2856adec9be82644"],["/fonts/oswald-v16-latin-regular.ttf","3ee24eb174d3fddc8bf9e2364206b516"],["/fonts/oswald-v16-latin-regular.woff","ca70f49a133f08485bd05d5cb28ef8b7"],["/fonts/oswald-v16-latin-regular.woff2","f15aa285863274b4f6ed578caa76565e"],["/index.html","28fd144be8d2d7f4b9789907aa49f6c3"],["/static/css/main.ed1fe45f.css","fef9201c93769fdf0bced8db19fc5a21"],["/static/js/0.4ff72a5e.chunk.js","b8b773fe2f3d3430f0795858ff062841"],["/static/js/1.2304aa4a.chunk.js","930e3d828e4f0c93a3846aaa1886b2be"],["/static/js/2.d4fa4acb.chunk.js","c1b177ecc92b53ddff850294f52be1f3"],["/static/js/main.ab0b38fe.js","182446ea445a1b269c1061fe7f92cfa3"],["/static/js/main.ab0b38fe.js.gz","33cc483202badac62cf82dc2190c1968"],["/static/media/cutive-v9-latin-regular.14eec75a.svg","14eec75a1dc04403f7230bc34997f7a2"],["/static/media/cutive-v9-latin-regular.14eec75a.svg.gz","5d7e332f155ea2bfd3a51610775c2259"],["/static/media/cutive-v9-latin-regular.235f4c09.ttf","235f4c09614378bb3b21494f0e37a463"],["/static/media/cutive-v9-latin-regular.235f4c09.ttf.gz","e4a23ce034f260137ed39f7fd5828f12"],["/static/media/cutive-v9-latin-regular.3f366d62.woff","3f366d62327674d570bfc2bc43df2114"],["/static/media/cutive-v9-latin-regular.9ce1266e.eot","9ce1266e606491734a955f00ce9799e1"],["/static/media/cutive-v9-latin-regular.a27f53ae.woff2","a27f53ae1c6204c7ca7a0bbe1e6bdbe5"],["/static/media/lato-v14-latin-regular.62fb51e9.woff","62fb51e9e645f63599238881b9de15dd"],["/static/media/lato-v14-latin-regular.6a6d7150.eot","6a6d715087a68ac5ad790b4f7bbb1766"],["/static/media/lato-v14-latin-regular.9087e4a6.svg","9087e4a6aceecc9b2914823044951a3a"],["/static/media/lato-v14-latin-regular.9087e4a6.svg.gz","f293d486c9f6edde90bfb2db524c05fe"],["/static/media/lato-v14-latin-regular.da4b79be.ttf","da4b79be8c588f56351e4d6368fcdbe1"],["/static/media/lato-v14-latin-regular.da4b79be.ttf.gz","dd4c65d9ef90c1720f5026d7826fcaf0"],["/static/media/lato-v14-latin-regular.f1a4a058.woff2","f1a4a058fbba1e35a406188ae7eddaf8"],["/static/media/logo.ee7cd8ed.svg","ee7cd8ed2dcec943251eb2763684fc6f"],["/static/media/oswald-v16-latin-regular.3ee24eb1.ttf","3ee24eb174d3fddc8bf9e2364206b516"],["/static/media/oswald-v16-latin-regular.3ee24eb1.ttf.gz","5efbb8cbcb10fdf038ce5502fa93debe"],["/static/media/oswald-v16-latin-regular.9f732316.eot","9f732316066bd82f6d66c4f9de79ecfe"],["/static/media/oswald-v16-latin-regular.ca70f49a.woff","ca70f49a133f08485bd05d5cb28ef8b7"],["/static/media/oswald-v16-latin-regular.d7b81418.svg","d7b814180b54a01b2856adec9be82644"],["/static/media/oswald-v16-latin-regular.d7b81418.svg.gz","899d205fee2afcb1d23f0a00db3f4294"],["/static/media/oswald-v16-latin-regular.f15aa285.woff2","f15aa285863274b4f6ed578caa76565e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});