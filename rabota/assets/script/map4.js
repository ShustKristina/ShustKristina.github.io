
function initMap()  {
  var popupContent = '<p class="content">Минск, ул. Корженевского, 45</p>';
   
    var centerLatLng = new google.maps.LatLng(54.149505, 28.547403);
    var myLatLng = {lat: 53.846192, lng: 27.514732};
   
  
    var mapOptions = {
        center: centerLatLng, 
        zoom: 7};

    
    var map = new google.maps.Map(document.getElementById("map4"), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    title: 'Солнечная долина'
})
infowindow = new google.maps.InfoWindow({
            content: popupContent
    
});
marker.addListener('click', function() {
    infowindow.open(map, marker);
});
 
}
google.maps.event.addDomListener(window, "load", initMap);
