//init map
function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(53.904390, 27.559782),
    zoom: 7,
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
var resultDist=0;
function geocodeLatLng(geocoder) {
  var input = document.getElementById('coordinates').value;
  var latlngStr = input.split(',');
  var latlng = { lat: +latlngStr[0], lng: +latlngStr[1] };
  geocoder.geocode({ 'location': latlng }, function (results) {
    alert(results[1].formatted_address)
    counter++;
    var resultTable=document.getElementById("result_table");
    var newStr = document.createElement("tr");
    var resultStr=document.createElement("tr");
    resultStr.id="resultStr";
    newStr.innerHTML = "<td>" + counter + "</td><td id=" + counter + ">" + latlngStr + "</td><td>" + results[1].formatted_address + "</td><td id='dist" + counter + "'></td>";
    resultStr.innerHTML="<td id='summDist' colspan='4'>Общее расстояние: "+resultDist+"</td>";
    resultTable.insertBefore(newStr, resultTable.lastChild);
    
if(!document.getElementById("resultStr")){
  resultTable.appendChild(resultStr);
}

    var marker1 = document.getElementById(counter).innerHTML.split(",");
    var marker2 = document.getElementById(counter - 1).innerHTML.split(",");
    var point1 = new google.maps.LatLng(+marker1[0], +marker1[1]);
    var point2 = new google.maps.LatLng(+marker2[0], +marker2[1]);
    document.getElementById("dist" + counter + "").innerHTML = "Расстояние: " + calc(point1, point2) + "км";
    resultDist+=parseFloat(calc(point1, point2));
    document.getElementById("summDist").innerHTML = "Общее расстояние: " + resultDist + "км";
  })
};

google.maps.event.addDomListener(window, "load", initMap);

// function to define the distance
function calc(a, b) {
  return (google.maps.geometry.spherical.computeDistanceBetween(a, b) / 1000).toFixed(1);
}