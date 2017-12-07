function initMap() {
var popupContent = '<p class="content">Логойский р-н Логойский с-с, 36</p>';
  var centerLatLng = new google.maps.LatLng(54.149505, 28.547403);
  var myLatLng3 = { lat: 54.181878, lng: 27.807332 };

  var mapOptions = {
    center: centerLatLng,
    zoom: 6
  };

  var map = new google.maps.Map(document.getElementById("map3"), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    title: 'Логойск'
  });
  infowindow = new google.maps.InfoWindow({
            content: popupContent
    
});
marker.addListener('click', function() {
    infowindow.open(map, marker);
});

}
google.maps.event.addDomListener(window, "load", initMap);
