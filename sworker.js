self.addEventListener("install",e=>{
    console.log("Service worker changed")
    
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./","./style.css","./img/1 - Copy.jpeg","./img/1.jpeg","./img/2.jpeg","./img/3.jpeg","./img/4.jpeg","./img/apples.png","./img/veg.jpeg","./img/fruits.jpeg","./img/meat.jpeg"])
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
})