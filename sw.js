const cacheName = "pwa-receitas" ;
const arquivosSalvos = ["/", "/index", "/styles.css", "/main.js", 
                        "/images"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache){
            return cache.addAll(arquivosSalvos);
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