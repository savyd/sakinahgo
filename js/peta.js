//Menampilkan peta
var mymap = new L.map('mapid').setView([-7.276595,112.7916688], 11);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
{ attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
maxZoom: 20, 
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiaWZpa2FyaWZpbiIsImEiOiJjamxndm83cTQwZjYwM3BvMHBma3dndGJqIn0.6LyWJiWv-yvp7mNPbyebYA'}).addTo(mymap);

// Menampilkan Lokasi User
mymap.locate({setView: true, maxZoom: 12});
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}
mymap.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationerror', onLocationError);

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
        img.src = places[ix].gambar;
        judul.textContent = places[ix].sponsor;
        alamat.textContent = places[ix].alamat;
        telp.textContent = places[ix].telp;
    }
}

let gmb = document.getElementById("gmb");
let rev = document.getElementById("review");
let img = document.createElement('img');
let judul = document.createElement('h2');
let alamat = document.createElement('p');
let telp = document.createElement('p');
gmb.appendChild(img);
rev.appendChild(judul);
rev.appendChild(alamat);
rev.appendChild(telp);

//let places = null;
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