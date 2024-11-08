const cacheName = "pwa-receitas" ;
const arquivosSalvos = ["/", "/index", "/styles.css", "/main.js", 
                    "/routes/carnes", "/routes/doces", "/routes/massas"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache){
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    )
})