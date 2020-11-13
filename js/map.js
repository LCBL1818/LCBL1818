var mymap = L.map('mapid').setView([34.0255642,-118.3408266], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGNibDA3IiwiYSI6ImNraGV0YzdtMzAxaWIyemw0MjM0d2VzZmQifQ.JHs44KJQ_23JmRB5aDENCA'
}).addTo(mymap);

var popup = L.popup()
    .setLatLng([34.0255642,-118.3408266])
    .setContent("TBL eSports compound")
    .openOn(mymap);
