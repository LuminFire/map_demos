// Set demoBase since it's not in the same place on our server
var demoBase = demoBase || '';

// Initialize a map
var map4400 = new L.Map('leaflet_4400', {
	maxZoom : 9,
	center : [40,0],
	zoom : 1
});

L.tileLayer(demoBase + './cache/demo/{z}/{x}/{y}', {
	attribution: '<a href="https://www.flickr.com/photos/nzcarfreak/15316351270/" target="_blank">Morris Eight Series E, by Riley</a>',
	maxZoom: 9,
	maxNativeZoom: 3,
	noWrap: true
}).addTo(map4400);

L.marker([ 20.96143961409684, -10.8984375 ]).addTo(map4400).bindPopup("This paint job might scare off potential buyers"); 

// --------------
map44002 = L.map('leaflet_44002').setView([0,0],0);

var streets = L.tileLayer('//otile{s}' + (window.location.protocol == 'https:' ? '-s' : '') + '.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png',{
	noWrap: true,
	subdomains: [1,2,3,4],
	attribution: '<a href="http://mapquest.com" target="_blank">Tiles courtesy of MapQuest/OSM</a>' 	
}).addTo(map44002);

var map44002legend = L.control({position: 'topright'});
map44002legend.onAdd = function () {
    var div = L.DomUtil.create('div', 'map44002button');
	div.innerHTML = '<span class="fakelink" onclick="map4402animate.step=0;map4402animate();">Play Animation</span>';
    return div;
};

map44002legend.addTo(map44002);

function map4402animate(){
	map4402animate.step = map4402animate.step || 0;

	if(map4402animate.step > 5){
		map4402animate.step = 0;
		return;
	}

	switch(map4402animate.step){
	case 0:
		map44002.setZoom(0)
		map44002.panTo([0,0])
	case 1:
		map44002.setZoom(1);
		break;
	case 2:
		map44002.panTo([69.41124, -91.05937]);
		break;
	case 3:
		map44002.setZoom(2)
		break;
	case 4:
		map44002.panTo([40.84706, -135.70312]);
		break;
	case 5:
		map44002.setZoom(3)
		break;
	}

	map4402animate.step++;

	if(map4402animate.step > 0){
		if(map4402animate.timer !== undefined){
			clearTimeout(map4402animate.timer);
		}

		map4402animate.timer = setTimeout(map4402animate,1500);
	}
}
