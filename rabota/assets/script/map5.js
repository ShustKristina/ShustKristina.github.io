
function initMap()  {
  var popupContent = '<p class="content">Минская обл. Дзержинский р-н д. Якуты</p>';
   
    var centerLatLng = new google.maps.LatLng(54.149505, 28.547403);
    var myLatLng = {lat: 53.821505, lng: 27.019029};
  

  
    var mapOptions = {
        center: centerLatLng, 
        zoom: 7};

    
    var map = new google.maps.Map(document.getElementById("map5"), mapOptions);


  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    title: 'Якутские горы'
})
infowindow = new google.maps.InfoWindow({
            content: popupContent
    
});
marker.addListener('click', function() {
    infowindow.open(map, marker);
});
}
google.maps.event.addDomListener(window, "load", initMap);
