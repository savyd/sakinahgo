// Menampilkan peta
var mymap = L.map('mapid').setView([-7.276595,112.7916688], 11);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
{ attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
maxZoom: 20, 
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiaWZpa2FyaWZpbiIsImEiOiJjamxndm83cTQwZjYwM3BvMHBma3dndGJqIn0.6LyWJiWv-yvp7mNPbyebYA'}).addTo(mymap);

// Menampilkan Marker dan Popup
function findLocation(x,y) {
    //console.log(x,y);
    for (var i = 0; i < places.length; i++){
        if(places[i].lokasi[0]==x && places[i].lokasi[1]==y){
            return i;
        }
    }
    return -1;
}
function showLocation(e) {
    //console.log("you clicked" + e.latlng.lat + "dan" e.latlng.lng);
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    if (ix >= 0) {
        Image.src = places[ix].gambar;
        parent.textContent = places[ix].riview;
    }
}

var circle = L.circle([-7.290644, 112.796294], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
    }).addTo(mymap);

let places = null;
const URL = "./data/peta.json";
 async function f(URL){
     try{
         const resp = await(fetch("./data/peta.json"));
         const resp2 = await resp.json();
         localStorage.setItem('places', JSON.stringify(resp.places))
         places = resp2.places;
         for (var p of places) {
             var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
             marker.on('click', showLocation);
            }
        }
     catch(err){
         console.log(err);
        }
    }
    f(URL);