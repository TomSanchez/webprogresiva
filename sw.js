self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('web').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/styles/main.css',
       '/js/app.js',
     ]);
   })
 );
});
