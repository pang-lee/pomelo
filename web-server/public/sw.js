const staticCacheName = 'site-static-v1'
const dynamicCacheName = 'site-dynamic-v1'
const assets = [
    '/',
    '/index.html',
    '/fallback.html',
    '/js/app.js',
    '/js/lib/pomeloclient.js',
    '/js/lib/socket.io.js',
    '/js/vue/component/game.vue',
    '/js/vue/component/live.vue',
    '/js/vue/component/login.vue',
    '/js/vue/component/navbar.vue',
    '/js/vue/component/disqus.vue',
    '/js/vue/component/profile.vue',
    '/js/vue/vuex.js',
    '/js/vue/router.js',
    '/js/vue/vue.js',
    '/css/base.css',
    'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
    'https://unpkg.com/bootstrap/dist/css/bootstrap.min.css',
    'https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css',
    'https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js',
    'https://unpkg.com/vue-router/dist/vue-router.js',
    'https://unpkg.com/vuex',
    'https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://unpkg.com/vue-disqus',
    'https://unpkg.com/http-vue-loader'
]

const limitCacheSize = (name, size) => {
    caches.open(name).then((cache) => {
        cache.keys().then((keys) => {
            if(keys.length > size) cache.delete(keys[0]).then(limitCacheSize(name, size))
        })
    })
}

self.addEventListener('install', (evt) =>{
    evt.waitUntil(
        caches.open(staticCacheName)
        .then((cache) => {
            console.log('caching')
            cache.addAll(assets)
        })
    )
})

self.addEventListener('activate', (evt) => {
    console.log('service activated')
    evt.waitUntil(
        caches.keys()
        .then((keys) => {
            return Promise.all(keys.filter((key) => key !== staticCacheName && key !== dynamicCacheName).map((key) => caches.delete(key)))
        })
    )
})

self.addEventListener('fetch', (evt) => {
    if(evt.request.url.indexOf('firestore.googleapi.com') === -1){
        evt.respondWith(
            caches.match(evt.request)
            .then((cacheRes) =>{
               return cacheRes || fetch(evt.request).then((fetchRes) => {
                   return caches.open(dynamicCacheName).then((cache) => {
                       cache.put(evt.request.url, fetchRes.clone())
                       limitCacheSize(dynamicCacheName, 15)
                       return fetchRes
                   })
               })
            }).catch(() => {
                if(evt.request.url.indexOf('.html') > -1){
                  return caches.match('/fallback.html')
                }
            })
        )
    }
})