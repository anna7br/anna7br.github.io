let stop = {
    nr: 6,
    name: "Moeraki Boulders",
    lat: -45.345275,
    lng: 170.826061,
    user: "anna7br",
    wikipedia: "https://en.wikipedia.org/wiki/Moeraki_Boulders",
};

const map = L.map("map", {
    center: [stop.lat, stop.lng],
    zoom: [13],
    layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    ]
});

let mrk = L.marker([stop.lat, stop.lng]).addTo(map);
mrk.bindPopup("Moeraki Boulders").openPopup();

//console.log(document.querySelector("#map"));