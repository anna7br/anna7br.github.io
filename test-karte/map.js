// Kartenscript

// Karte initialisieren und auf Österreichs Mittelpunkt blicken
let map = L.map("map", {
    fullscreenControl: true,
    center: [47.71216, 13.34290],
    zoom: 7,
    layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ]
});

// add POW Watermark
L.Control.Watermark = L.Control.extend({
    onAdd: function (map) {
        var img = L.DomUtil.create('img');
        img.src = 'POW_AT_lang_blue.png';
        img.style.width = '100px';
        return img;
    },
    onRemove: function (map) {
        // Nothing to do here
    }
});
L.control.watermark = function (opts) {
    return new L.Control.Watermark(opts);
}
L.control.watermark({
    position: 'topright'
}).addTo(map);

// adjust zoom level and center to selected featuregroup layer
map.on('layeradd layerremove', function () {
    // Create new empty bounds
    var bounds = new L.LatLngBounds();
    // Iterate the map's layers
    map.eachLayer(function (layer) {
        // Check if layer is a featuregroup
        if (layer instanceof L.FeatureGroup) {
            // Extend bounds with group's bounds
            bounds.extend(layer.getBounds());
        }
    });
    // Check if bounds are valid (could be empty)
    if (bounds.isValid()) {
        // Valid, fit bounds
        map.fitBounds(bounds);
    } else {
        // Invalid, fit world
        map.setView([47.71216, 13.34290], 7);
    }
});
// source: https://stackoverflow.com/questions/45286918/leafletjs-dynamically-bound-map-to-visible-overlays

// Overlays für die Themen zum Ein- und Ausschalten definieren
let overlays = {
    at: L.featureGroup(),
    ktn: L.featureGroup(),
    noe: L.featureGroup(),
    ooe: L.featureGroup(),
    sbg: L.featureGroup(),
    stmk: L.featureGroup(),
    tir: L.featureGroup(),
    vbg: L.featureGroup(),
    hike: L.featureGroup()
};

// Overlays zur Layer-Control hinzufügen
let layerControl = L.control.layers({
    "ganz Österreich": overlays.at,
    "Kärnten": overlays.ktn,
    "Niederösterreich": overlays.noe,
    "Oberösterreich": overlays.ooe,
    "Salzburg": overlays.sbg,
    "Steiermark": overlays.stmk,
    "Tirol": overlays.tir,
    "Vorarlberg": overlays.vbg,
    "Wandern":overlays.wandern
})
.addTo(map);
overlays.at.addTo(map);

// create custom snowflake icon
var snowflake = L.icon({
    iconUrl: 'snowflake.png',
    iconSize: [20, 20], // size of the icon
    iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});

// Für jeden Eintrag in skigebiete.js werden Marker erzeugt und zum Layer overlays.at ("ganz Österreich") hinzugefügt
var marker = (function () {
    for (let index = 0; index < SKIGEBIETE.length; index++) {
        let marker = L.marker([SKIGEBIETE[index].lat, SKIGEBIETE[index].lon], {
            icon: snowflake
        })
        marker.bindPopup(`
            <h2>${SKIGEBIETE[index].name}</h2>
            <p>${SKIGEBIETE[index].bundesland}</p>
            <p>${SKIGEBIETE[index].info || ''}</p>
            <p><a href=${SKIGEBIETE[index].link}><i class="fas fa-link"></i>Zur Website</a></p>
            <p><a href=${SKIGEBIETE[index].scotty}><i class="fas fa-link"></i>Nächste Verbindung suchen</a></p>
           `)
            .addTo(overlays.at)
        // Mit den nachfolgenden if-Abfragen wird für jedes Bundesland noch ein eigener Layer angelegt
        if (SKIGEBIETE[index].bundeslandId == "ktn") {
            let marker = L.marker([SKIGEBIETE[index].lat, SKIGEBIETE[index].lon], {
                icon: snowflake
            })
            marker.bindPopup(`
                <h2>${SKIGEBIETE[index].name}</h2>
                <p>${SKIGEBIETE[index].bundesland}</p>
                <p>${SKIGEBIETE[index].info || ''}</p>
                <p><a href=${SKIGEBIETE[index].link}><i class="fas fa-link"></i>Zur Website</a></p>
                <p><a href=${SKIGEBIETE[index].scotty}><i class="fas fa-link"></i>Nächste Verbindung suchen</a></p>
                `);
            marker.addTo(overlays.ktn);
        }
        if (SKIGEBIETE[index].bundeslandId == "noe") {
            let marker = L.marker([SKIGEBIETE[index].lat, SKIGEBIETE[index].lon], {
                icon: snowflake
            })
            marker.bindPopup(`
                <h2>${SKIGEBIETE[index].name}</h2>
                <p>${SKIGEBIETE[index].bundesland}</p>
                <p>${SKIGEBIETE[index].info || ''}</p>
                <p><a href=${SKIGEBIETE[index].link}><i class="fas fa-link"></i>Zur Website</a></p>
                <p><a href=${SKIGEBIETE[index].scotty}><i class="fas fa-link"></i>Nächste Verbindung suchen</a></p>
                `);
            marker.addTo(overlays.noe);
        }
        if (SKIGEBIETE[index].bundeslandId == "ooe") {
            let marker = L.marker([SKIGEBIETE[index].lat, SKIGEBIETE[index].lon], {
                icon: snowflake
            })
            marker.bindPopup(`
                <h2>${SKIGEBIETE[index].name}</h2>
                <p>${SKIGEBIETE[index].bundesland}</p>
                <p>${SKIGEBIETE[index].info || ''}</p>
                <p><a href=${SKIGEBIETE[index].link}><i class="fas fa-link"></i>Zur Website</a></p>
                <p><a href=${SKIGEBIETE[index].scotty}><i class="fas fa-link"></i>Nächste Verbindung suchen</a></p>
                `);
            marker.addTo(overlays.ooe);
        }
        if (SKIGEBIETE[index].bundeslandId == "sbg") {
            let marker = L.marker([SKIGEBIETE[index].lat, SKIGEBIETE[index].lon], {
                icon: snowflake
            })
            marker.bindPopup(`
                <h2>${SKIGEBIETE[index].name}</h2>
                <p>${SKIGEBIETE[index].bundesland}</p>
                <p>${SKIGEBIETE[index].info || ''}</p>
                <p><a href=${SKIGEBIETE[index].link}><i class="fas fa-link"></i>Zur Website</a></p>
                <p><a href=${SKIGEBIETE[index].scotty}><i class="fas fa-link"></i>Nächste Verbindung suchen</a></p>
                `);
            marker.addTo(overlays.sbg);
        }
        if (SKIGEBIETE[index].bundeslandId == "stmk") {
            let marker = L.marker([SKIGEBIETE[index].lat, SKIGEBIETE[index].lon], {
                icon: snowflake
            })
            marker.bindPopup(`
                <h2>${SKIGEBIETE[index].name}</h2>
                <p>${SKIGEBIETE[index].bundesland}</p>
                <p>${SKIGEBIETE[index].info || ''}</p>
                <p><a href=${SKIGEBIETE[index].link}><i class="fas fa-link"></i>Zur Website</a></p>
                <p><a href=${SKIGEBIETE[index].scotty}><i class="fas fa-link"></i>Nächste Verbindung suchen</a></p>
                `);
            marker.addTo(overlays.stmk);
        }
        if (SKIGEBIETE[index].bundeslandId == "tir") {
            let marker = L.marker([SKIGEBIETE[index].lat, SKIGEBIETE[index].lon], {
                icon: snowflake
            })
            marker.bindPopup(`
                <h2>${SKIGEBIETE[index].name}</h2>
                <p>${SKIGEBIETE[index].bundesland}</p>
                <p>${SKIGEBIETE[index].info || ''}</p>
                <p><a href=${SKIGEBIETE[index].link}><i class="fas fa-link"></i>Zur Website</a></p>
                <p><a href=${SKIGEBIETE[index].scotty}><i class="fas fa-link"></i>Nächste Verbindung suchen</a></p>
                `);
            marker.addTo(overlays.tir);
        }
        if (SKIGEBIETE[index].bundeslandId == "vbg") {
            let marker = L.marker([SKIGEBIETE[index].lat, SKIGEBIETE[index].lon], {
                icon: snowflake
            })
            marker.bindPopup(`
                <h2>${SKIGEBIETE[index].name}</h2>
                <p>${SKIGEBIETE[index].bundesland}</p>
                <p>${SKIGEBIETE[index].info || ''}</p>
                <p><a href=${SKIGEBIETE[index].link}><i class="fas fa-link"></i>Zur Website</a></p>
                <p><a href=${SKIGEBIETE[index].scotty}><i class="fas fa-link"></i>Nächste Verbindung suchen</a></p>
                `);
            marker.addTo(overlays.vbg);
        }
    }
})();

// create custom hiker icon
var hiker = L.icon({
    iconUrl: 'hiking-solid.svg',
    iconSize: [20, 20], // size of the icon
    iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});

// Für jeden Eintrag in wanderungen.js werden Marker erzeugt und zum Layer overlays.at ("ganz Österreich") hinzugefügt
var marker = (function () {
    for (let index = 0; index < WANDERUNGEN.length; index++) {
        let marker = L.marker([WANDERUNGEN[index].lat, WANDERUNGEN[index].lon], {
            icon: hiker
        })
        marker.bindPopup(`
            <h2>${WANDERUNGEN[index].name}</h2>
            <p>${WANDERUNGEN[index].bundesland}</p>
            <p>${WANDERUNGEN[index].info || ''}</p>
            <p><a href=${WANDERUNGEN[index].link}><i class="fas fa-link"></i>Zur Website</a></p>
            <p><a href=${WANDERUNGEN[index].scotty}><i class="fas fa-link"></i>Nächste Verbindung suchen</a></p>
            `)
            .addTo(overlays.at)
            .addTo(overlays.wandern)
        // Mit den nachfolgenden if-Abfragen wird für jedes Bundesland noch ein eigener Layer angelegt
        if (SKIGEBIETE[index].bundeslandId == "tir") {
            let marker = L.marker([WANDERUNGEN[index].lat, WANDERUNGEN[index].lon], {
                icon: hiker
            })
            marker.bindPopup(`
                <h2>${WANDERUNGEN[index].name}</h2>
                <p>${WANDERUNGEN[index].bundesland}</p>
                <p>${WANDERUNGEN[index].info || ''}</p>
                <p><a href=${WANDERUNGEN[index].link}><i class="fas fa-link"></i>Zur Website</a></p>
                <p><a href=${WANDERUNGEN[index].scotty}><i class="fas fa-link"></i>Nächste Verbindung suchen</a></p>
                `);
            marker.addTo(overlays.tir);
        }
    }
})();


// PLUGINS //

// Minimap
let miniMap = new L.Control.MiniMap(
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'), {
        toggleDisplay: true,
        minimized: false,
        // zoomLevelOffset: The offset applied to the zoom in the minimap compared to the zoom of the main map. Can be positive or negative, defaults to -5.
        zoomLevelOffset: -4,
        width: 100,
        height: 100
    }
).addTo(map);
// source: https://github.com/Norkart/Leaflet-MiniMap


// scale bar
L.control.scale({
    imperial: false
}).addTo(map);

// leaflet hash plugin
L.hash(map);
// source: https://cdnjs.com/libraries/leaflet-hash
