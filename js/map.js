console.log("MAP")

$(document).ready(function(){
    var mymap = L.map('map').setView([48.462, -123.3117], 15);
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 28,
        id: 'mapbox.streets-satellite',
        accessToken: 'pk.eyJ1Ijoib290aGViYWxsc29vIiwiYSI6ImNqeXBkMmN0MTA3OTUzbXFyMTc4MDJ5angifQ.mY2js0Eh5AWkpOejtzvecg'
    }).addTo(mymap);


})




