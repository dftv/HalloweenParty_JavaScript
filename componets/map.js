const cordsCenter = [0, 0];
const cordsLocal = [0.0005, 0];
const cordsHospital = [-0.0005, 0];

const iconPhantom = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat(cordsLocal)),
    name: 'Local',
});

const iconHospital = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat(cordsHospital)),
    name: 'Hospital',
});

const sourceIconPhantom = new ol.source.Vector({
    url: '/data/layers/7day-M2.5.json',
    format: new ol.format.GeoJSON(),
    features: [iconPhantom]
});

const sourceIconHospital = new ol.source.Vector({
    url: '/data/layers/7day-M2.5.json',
    format: new ol.format.GeoJSON(),
    features: [iconHospital]
});

const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }),
        new ol.layer.Vector({
            source: sourceIconPhantom,
            style: new ol.style.Style({
                image: new ol.style.Icon({
                    anchor: [0.5, 1],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    src: './lib/images/phantom.png',
                })
            })
        }),
        new ol.layer.Vector({
            source: sourceIconHospital,
            style: new ol.style.Style({
                image: new ol.style.Icon({
                    anchor: [0.5, 1],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    src: './lib/images/hospital.png',
                })
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat(cordsCenter),
        zoom: 16,
        maxZoom: 17,
        minZoom: 15,
    }),
});