const map = L.map("map", {
    center: [-45.345275, 170.826061],
    zoom: [13],
    layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    ]
});

let mrk = L.marker([-45.345275, 170.826061]).addTo(map);

console.log(document.querySelector("#map"));