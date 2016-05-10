/* Copyright 2016, Cimbura.com, Licensed under the BSD 2-Clause License */
var gmap,infoWindow;
function make_google_map() {
	gmap = new google.maps.Map(document.getElementById('google_map_4321'), {
		center: {lat: 45.08187481614703, lng: -93.24516123963815},
		zoom: 13
	});

	var infoWindow = new google.maps.InfoWindow();

	var marker = new google.maps.Marker({
		position: {lat: 45.08187481614703, lng: -93.24516123963815},
		map: gmap,
		title: 'The Cimbura.com Office!'
	});

	google.maps.event.addListener(marker,'click',function(){
		infoWindow.setContent("Let Cimbura.com solve your Google<br>Maps API mapping problems!");
		infoWindow.open(gmap,marker);
	});
}

var lmap;
function make_leaflet_map(){
	lmap = L.map('leaflet_map_4321').setView([45.08187481614703, -93.24516123963815], 13);

	var streets = L.tileLayer('//otile{s}' + (window.location.protocol == 'https:' ? '-s' : '') + '.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png',{
		subdomains: [1,2,3,4],
		attribution: '<a href="http://mapquest.com" target="_blank">Tiles courtesy of MapQuest/OSM</a>' 	
	}).addTo(lmap);
	var satelite = L.tileLayer('//otile{s}' + (window.location.protocol == 'https:' ? '-s' : '') + '.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png',{
		subdomains: [1,2,3,4],
		attribution: '<a href="http://mapquest.com" target="_blank">Tiles courtesy of MapQuest/OSM</a>' 	
	});

	L.control.layers({'Streets':streets, 'Satelite': satelite},{},{
	'collapsed': false
	}).addTo(lmap);

	L.marker([45.08187481614703, -93.24516123963815]).addTo(lmap).bindPopup("Let Cimbura.com solve your<br>Leaflet.js mapping problems!");
}

make_google_map();
make_leaflet_map();
