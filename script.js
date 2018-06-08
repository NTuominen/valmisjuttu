window.onload = () => {


  // replace "toner" here with "terrain" or "watercolor"
var layer = new L.StamenTileLayer("toner");
var map = new L.Map("mapid", {
    center: new L.LatLng(60.164218, 24.943385),
    zoom: 15
});

map.addLayer(layer);

let markerCoordinates = [60.164218, 24.943385];

L.marker(markerCoordinates)
   .addTo(map)
   .bindPopup('Suomen Taiteilijaseura ry')

   .openPopup();

};



          