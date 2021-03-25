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


let nav = document.querySelector('#navigation');
console.log(nav);

//console.log(ROUTE);
for (let entry of ROUTE) {
  // console.log(entry);
  nav.innerHTML += `
    <option value="${entry.user}r">Stop ${entry.nr}: ${entry.name}</option>
  `;
  let mrk = L.marker([entry.lat, entry.lng]).addTo(map);
  mrk.bindPopup(`<h4>Stop ${entry.nr}: ${entry.name}<h4>
<p><a href="${entry.wikipedia}"><i class="fas fa-external-link-alt mr-3"></i>Read about stop in Wikipedia</a></p>
`);
  if (entry.nr == 6) {
    map.setView([entry.lat, entry.lng], 13);
    mrk.openPopup();
  }

}

console.log(document.querySelector("#map"));

//            <option value="anna7br">Moeraki_Boulders</option>
