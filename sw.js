const cacheName = "pwa-receitas" ;
const arquivosSalvos = ["/", "/index", "/styles.css", "/main.js", 
                    "/routes/carnes", "/routes/doces", "/routes/massas",
                    "/images/bife.jpg", "/images/bolocarne.jpg", "/images/brigadeiro.jpg", 
                    "/images/brownie.jpg", "/images/macarrao.jpg", "/images/maracuja.jpg",
                    "/images/panqueca.jpg", "/images/pastel.jpg", "/images/strogonoff.jpg"];

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