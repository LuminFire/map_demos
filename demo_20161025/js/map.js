// Initialize a map
var map = new L.Map('map', {
    maxZoom : 18,
    center : [0,0],
    zoom : 2
});

// Add a single image basemap
var basemap = new L.ImageOverlay(
    'img/basemap.png', 
    new L.LatLngBounds(
        new L.LatLng(-90,-180),
        new L.LatLng(90,180)
    ),
    {opacity: 1.0}
);
map.attributionControl.addAttribution('<a href="https://github.com/stuporglue/leaflet-spiders">About This Map</a>')
basemap.addTo(map);
