//init map
var mapOptions = {
  center: new google.maps.LatLng(53.904390, 27.559782),
  zoom: 11,
  disableDoubleClickZoom: true
};
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
var m = []
function createMarker1() {
  if (m[0]) {
    m[0].setMap(null);
    var myLatLng = { lat: 53.955615, lng: 27.615247 };
    m[0] = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: '№33/3 (Гамарника, 3)',
    });
  }
  else {
    var myLatLng = { lat: 53.955615, lng: 27.615247 };
    m[0] = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: '№33/3 (Гамарника, 3)',
    });
  }
}
function createMarker2() {
  if (m[0]) {
    m[0].setMap(null);
    var myLatLng = { lat: 53.894940, lng: 27.586908 };
    m[0] = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'г.Минск, ул.Ивановская, 0',
    });
  }
  else {
    var myLatLng = { lat: 53.894940, lng: 27.586908 };
    m[0] = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'г.Минск, ул.Ивановская, 0',
    });
  }
}
function createMarker3() {
  if (m[0]) {
    m[0].setMap(null);
    var myLatLng = { lat: 53.893435, lng: 27.588088 };
    m[0] = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: '220089 г.Минск ул.Ивановская, 0',
    });
  }
  else {
    var myLatLng = { lat: 53.893435, lng: 27.588088 };
    m[0] = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: '220089 г.Минск ул.Ивановская, 0',
    });
  }
}