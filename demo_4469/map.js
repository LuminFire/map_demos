var baseLayers = {

	'streetmaps' : {
		// Street maps 
		'OpenStreetMap Default': L.tileLayer.provider('OpenStreetMap.Mapnik'),
		'OpenStreetMap German Style': L.tileLayer.provider('OpenStreetMap.DE'),
		'OpenStreetMap H.O.T.': L.tileLayer.provider('OpenStreetMap.HOT'),
		'Hydda Full': L.tileLayer.provider('Hydda.Full'),
		'MapQuest OSM': L.tileLayer.provider('MapQuestOpen.OSM'),
		'MapBox Example': L.tileLayer.provider('MapBox', {id: 'mapbox.streets', accessToken: 'pk.eyJ1IjoiZ3V0ZW55ZSIsImEiOiJmNjJlMDNmYTUyMzNjMzQxZmY4Mzc1ZmFiYmExNjMxOSJ9.xgl1PBwQV9CtwW-usedrcQ'}),
		'Esri WorldStreetMap': L.tileLayer.provider('Esri.WorldStreetMap'),
		'Esri DeLorme': L.tileLayer.provider('Esri.DeLorme'),
		'HERE Day': L.tileLayer.provider('HERE.normalDay',{ 'app_id' : 'x2nSHKhGifiSaZMWInEi', 'app_code' : 'nAOS6wrPyC_JpgLuA6XimA' }),
		'HERE Day Transit': L.tileLayer.provider('HERE.normalDayTransit',{ 'app_id' : 'x2nSHKhGifiSaZMWInEi', 'app_code' : 'nAOS6wrPyC_JpgLuA6XimA' }),
		'HERE Night': L.tileLayer.provider('HERE.normalNight',{ 'app_id' : 'x2nSHKhGifiSaZMWInEi', 'app_code' : 'nAOS6wrPyC_JpgLuA6XimA' }),
		'HERE Night Grey': L.tileLayer.provider('HERE.normalNightGrey',{ 'app_id' : 'x2nSHKhGifiSaZMWInEi', 'app_code' : 'nAOS6wrPyC_JpgLuA6XimA' }),
		'Thunderforest Landscape': L.tileLayer.provider('Thunderforest.Landscape'),
	}, 

	'aerial_maps' : {

		// Aerial
		'MapQuest Aerial': L.tileLayer.provider('MapQuestOpen.Aerial'),
		'Esri WorldImagery': L.tileLayer.provider('Esri.WorldImagery'),
		'HERE Satellite': L.tileLayer.provider('HERE.satelliteDay',{ 'app_id' : 'x2nSHKhGifiSaZMWInEi', 'app_code' : 'nAOS6wrPyC_JpgLuA6XimA' }),
	},

	'black_and_white' : {
		// Black and white maps
		'CartoDB Positron' : L.tileLayer.provider('CartoDB.Positron'),
		'OpenStreetMap Black and White': L.tileLayer.provider('OpenStreetMap.BlackAndWhite'),
		'Esri WorldGrayCanvas': L.tileLayer.provider('Esri.WorldGrayCanvas'),
		'Stamen Toner': L.tileLayer.provider('Stamen.Toner'),
		'CartoDB Positron No Labels' : L.tileLayer.provider('CartoDB.PositronNoLabels'),
		'CartoDB Dark Matter' : L.tileLayer.provider('CartoDB.DarkMatter'),
		'CartoDB Dark Matter No Labels' : L.tileLayer.provider('CartoDB.DarkMatterNoLabels'),
	},

	'topoish' : {
		// Topo-ish
		'OpenTopoMap': L.tileLayer.provider('OpenTopoMap'),
		'Esri WorldTopoMap': L.tileLayer.provider('Esri.WorldTopoMap'),
		'Esri WorldTerrain': L.tileLayer.provider('Esri.WorldTerrain'),
		'Esri WorldShadedRelief': L.tileLayer.provider('Esri.WorldShadedRelief'),
		'Esri WorldPhysical': L.tileLayer.provider('Esri.WorldPhysical'),
		'Esri OceanBasemap': L.tileLayer.provider('Esri.OceanBasemap'),
		'Esri NatGeoWorldMap': L.tileLayer.provider('Esri.NatGeoWorldMap'),
		'HERE Terrain': L.tileLayer.provider('HERE.terrainDay',{ 'app_id' : 'x2nSHKhGifiSaZMWInEi', 'app_code' : 'nAOS6wrPyC_JpgLuA6XimA' }),
	}, 

	'other' : {
		// Other
		'Stamen Watercolor': L.tileLayer.provider('Stamen.Watercolor'),
		'MapBox Custom Funky Pink': new L.TileLayer('https://api.mapbox.com/styles/v1/stuporglue/cijy1ed8a00qr94kq2oefs051/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3R1cG9yZ2x1ZSIsImEiOiJKX3BMQWpVIn0.0mKeLL8tOd0u6khpQ5KlWg', { 'attribution': 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; ' + 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>', 'subdomains': 'abcd' }),
		'Thunderforest OpenCycleMap': L.tileLayer.provider('Thunderforest.OpenCycleMap'),
		'Thunderforest Transport': L.tileLayer.provider('Thunderforest.Transport'),
	}
};

var mapMapping = {
	'leaflet_4469_street' : {'zoom':10, 'center': [32.764, -96.85], 'basemaps': 'streetmaps'},
	'leaflet_4469_aerial' : {'zoom':6,  'center': [60.23, -149.00], 'basemaps': 'aerial_maps'},
	'leaflet_4469_bw' :		{'zoom':10, 'center': [33.81, -118.23], 'basemaps': 'black_and_white'},
	'leaflet_4469_topo' :	{'zoom':7,  'center': [20.50, -156.71], 'basemaps': 'topoish'},
	'leaflet_4469_other' :	{'zoom':1,  'center': [35.46, -90.703], 'basemaps': 'other'},
}

for(var m in mapMapping){
	var ourMap = L.map(m , {
		center: mapMapping[m].center,
		zoom: mapMapping[m].zoom,
	});

	mapMapping[m].map = ourMap;

	var ourBaseLayers = baseLayers[mapMapping[m].basemaps];
	for(var bm in ourBaseLayers){
		ourBaseLayers[bm].addTo(ourMap);
		break;
	}

	L.control.layers(ourBaseLayers, null, {collapsed: true}).addTo(ourMap);
}
