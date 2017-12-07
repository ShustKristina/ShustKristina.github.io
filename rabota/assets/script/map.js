
function initMap()  {
   var popupContent = '<p class="content">Минская область, Логойский район, РУП РГЦ Силичи</p>';
   
    var centerLatLng = new google.maps.LatLng(54.149505, 28.547403);
  
    var myLatLng = {lat: 54.160189, lng: 27.834909};
    
  
    var mapOptions = {
        center: centerLatLng, 
        zoom: 7};
    
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    title: 'Силичи'
});
infowindow = new google.maps.InfoWindow({
            content: popupContent
    
});
marker.addListener('click', function() {
    infowindow.open(map, marker);
});

}
google.maps.event.addDomListener(window, "load", initMap);