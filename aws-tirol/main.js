// https://leafletjs.com/reference-1.7.1.html#tilelayer
let basemapGray = L.tileLayer.provider('BasemapAT.grau');

// https://leafletjs.com/reference-1.7.1.html#map-example
let map = L.map("map", {
    center: [47, 11],
    zoom: 9,
    layers: [
        basemapGray
    ]
});


let overlays = {
    stations: L.featureGroup(),
    temperature: L.featureGroup(),
    snowheight: L.featureGroup(),
    windspeed: L.featureGroup(),
    winddirection: L.featureGroup()
};

// https://leafletjs.com/reference-1.7.1.html#control
let layerControl = L.control.layers({
    "BasemapAT.grau": basemapGray,
    // https://leafletjs.com/reference-1.7.1.html#tilelayer
    "BasemapAT.orthofoto": L.tileLayer.provider('BasemapAT.orthofoto'),
    "BasemapAT.terrain": L.tileLayer.provider('BasemapAT.terrain'),
    "BasemapAT.basemap": L.tileLayer.provider('BasemapAT.basemap'),
    "BasemapAT.surface": L.tileLayer.provider('BasemapAT.surface'),
    "BasemapAT.overlay": L.tileLayer.provider('BasemapAT.overlay'),
    // https://leafletjs.com/reference-1.7.1.html#layergroup
    "BasemapAT.overlay+ortho": L.layerGroup([
        L.tileLayer.provider('BasemapAT.orthofoto'),
        L.tileLayer.provider('BasemapAT.overlay')
    ])
}, {
    "Wetterstationen Tirol": overlays.stations,
    "Temperatur [°C]": overlays.temperature,
    "Schneehöhe [cm]": overlays.snowheight,
    "Windgeschwindigkeit [km/h]": overlays.windspeed,
    "Windrichtung": overlays.winddirection
}, {
    collapsed: false
}).addTo(map);
overlays.temperature.addTo(map);

// Maßstab einbauen
L.control.scale({
    metric: true, imperial: false
}).addTo(map);

let getColor = (value, colorRamp) => {

};

let newLabel = (coords, options) => {
    let color = getColor(options.value, options.colors)
    let label = L.divIcon({
        html: `<div>${options.value}</div>`,
        className: "text-label"
    })
    let marker = L.marker([coords[1], coords[0]], {
        icon: label
    });
    return marker;
};



let awsUrl = 'https://wiski.tirol.gv.at/lawine/produkte/ogd.geojson';

fetch(awsUrl)
    .then(response => response.json())
    .then(json => {
        console.log('Daten konvertiert: ', json);
        for (station of json.features) {
            // console.log('Station: ', station);
            // https://leafletjs.com/reference-1.7.1.html#marker
            let marker = L.marker([
                station.geometry.coordinates[1],
                station.geometry.coordinates[0]
            ]);
            let formattedDate = new Date(station.properties.date);
            marker.bindPopup(`
            <h3>${station.properties.name}</h3>
            <ul>
              <li>Datum: ${formattedDate.toLocaleString("de")}</li>
              <li>Seehöhe: ${station.geometry.coordinates[2]} m</li>
              <li>Temperatur: ${station.properties.LT} C</li>
              <li>Schneehöhe: ${station.properties.HS || '?'} cm</li>
              <li>Windgeschwindigkeit: ${station.properties.WG || '?'} km/h</li>
              <li>Windgeschwindrichtung: ${station.properties.WR || '?'}</li>
            </ul>
            <a target="_blank" href="https://wiski.tirol.gv.at/lawine/grafiken/1100/standard/tag/${station.properties.plot}.png">Grafik</a>
            `);
            marker.addTo(overlays.stations);
        
            if (typeof station.properties.LT == "number") {
                let marker = newLabel(station.geometry.coordinates, {
                    value: station.properties.LT,
                    colors: COLORS.temperature
                });
                marker.addTo(overlays.temperature);
            }
            if (typeof station.properties.HS == "number") {
                let marker = newLabel(station.geometry.coordinates, {
                    value: station.properties.HS,
                    colors: COLORS.snowheight
                });
                marker.addTo(overlays.snowheight);
            }
            if (typeof station.properties.WG == "number") {
                let marker = newLabel(station.geometry.coordinates, {
                    value: station.properties.WG
                    colors: COLORS.windspeed
                });
                marker.addTo(overlays.windspeed);
            }
        }
        // set map view to all stations
        map.fitBounds(overlays.stations.getBounds());
    });