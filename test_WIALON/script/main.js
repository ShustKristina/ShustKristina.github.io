//init map
function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(53.904390, 27.559782),
    zoom: 6,
    disableDoubleClickZoom: true
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  //save coordinates
  google.maps.event.addListener(map, 'dblclick', function (event) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    document.getElementById("coordinates").value = (+lat + ', ' + lng);
  });

  //table of results
    var geocoder = new google.maps.Geocoder;
    document.getElementById('button').addEventListener('click', function () {
    geocodeLatLng(geocoder);
  });
};
var counter = 0;
function geocodeLatLng(geocoder) {
  var input = document.getElementById('coordinates').value;
  var latlngStr = input.split(',');
  console.log(latlngStr)
  var latlng = { lat: +latlngStr[0], lng: +latlngStr[1] };
  geocoder.geocode({ 'location': latlng }, function (results) {
      counter++;
      var newStr = document.createElement("tr");
      newStr.innerHTML = "<td>" + counter + "</td><td>" + results[1].formatted_address + "</td>";
      document.getElementById("result_table").appendChild(newStr)
      console.log(results[1].formatted_address)
  })
};
google.maps.event.addDomListener(window, "load", initMap);
