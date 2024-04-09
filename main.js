
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-40.57516364717771, 173.83368220736585], 5.50);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/clu1okfsi022801oi3cy1de0z/draft/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA',{
	maxZoom: 19,
	tileSize: 512,
    	zoomOffset: -1,
	attribution: '&copy; OpenStreetMap | MapBox - Projection: WGS84 Spherical Mercator'
}).addTo(map);
// END REPLACE BLOCK


// Custom marker icons

var footballIcon = L.icon({
    iconUrl: '//file/Usersc$/cch193/Home/Desktop/GIS403 LABS/Symbols/footballpin.png',
    iconSize: [30,30],
    iconAnchor: [20,40],
    popupAnchor: [0, -40]   
   
});

var cafeIcon = L.icon({
    iconUrl: '//file/Usersc$/cch193/Home/Desktop/GIS403 LABS/Symbols/cafepin.png',
    iconSize: [30,30],
    iconAnchor: [20,40],
    popupAnchor: [0, -40]  

});

var resturantIcon = L.icon({
    iconUrl: '//file/Usersc$/cch193/Home/Desktop/GIS403 LABS/Symbols/restaurant.png',
    iconSize: [30,30],
    iconAnchor: [20,40],
    popupAnchor: [0, -40]  
});

var cabinIcon = L.icon({
    iconUrl: '//file/Usersc$/cch193/Home/Desktop/GIS403 LABS/Symbols/cabinpin.png',
    iconSize: [30,30],
    iconAnchor: [20,40],
    popupAnchor: [0, -40]  
});

//

// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
const marker1 = L.marker([-40.335061228045625, 175.6276445697483], { icon: footballIcon }).addTo(map)
	.bindPopup('We, Team Lhotshampa, participate in the annual inter-Nepalese football tournament hosted at Skoglund Park. We \ currently hold the title of five-times champions.');

const marker2 = L.marker([-43.57817117924751, 172.54656944752773], { icon: cafeIcon }).addTo(map)
	.bindPopup('Every morning starts with a Chai Latte here at Suburban Rascal cafe.');

const marker3 = L.marker([-45.86816153383429, 170.506589880616], { icon: resturantIcon }).addTo(map)
	.bindPopup("Mela Eatery is one of the best Nepalese resturants in New Zealand. It\'s where I love to go, espically when I'm missing my moms cooking.");

const marker4 = L.marker([-42.49051468800719, 173.16253358475484],{ icon: cabinIcon }).addTo(map)
	.bindPopup('I have spend many weekends at this cabin in Mt Lyford. It\'s a great place to escape with loved ones, offering nearby hiking trails and lakes for exploration.').openPopup();



// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: '#F768A1',
                weight: 0.4,  
                fillColor: '#238B45', 
		fillOpacity: 0.3,
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-43.001022693302296, 171.5459717367826],
		[-42.81182471899739, 172.01014004947925],
		[-42.90293983675629, 172.33059097665478],
		[-43.24200897891815, 171.8741911712836],
		[-43.001022693302296, 171.5459717367826]
	],{
		color: '#08306b',
                weight: 2,
		fillColor: '#08519c',
                opacity: 1,
                dashArray:'2',
                fillOpacity: 0.5
	}).addTo(map).bindPopup("Arthur's Pass presents an extensive network of hiking tracks. Among them, I've conquered the Avalance Peak, Devils Punchbowl,and the Mt Aicken track. My goal is to conquer all tracks in this remarkable area by the end of 2024.");


setTimeout(ReOrder, 1000);
function ReOrder() {
	geojsonLayer.bringToBack();
	polygon.bringToFront();
}

// END OF DOCUMENT