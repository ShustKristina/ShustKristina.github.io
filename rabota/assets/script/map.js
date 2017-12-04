
function initMap() {
   
    var centerLatLng = new google.maps.LatLng(54.149505, 28.547403);
    var myLatLng = {lat: 54.181878, lng: 27.807332};
    var myLatLng2 = {lat: 54.160189, lng: 27.834909};
    var myLatLng3 = {lat: 54.059296, lng: 27.734589};
    var myLatLng4 = {lat: 53.846192, lng: 27.514732};
    var myLatLng5 = {lat: 53.821505, lng: 27.019029};
  
    var mapOptions = {
        center: centerLatLng, 
        zoom: 7};

    
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    

     var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Логойск'
  });
   var marker = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: 'Силичи'
})
  var marker = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    title: 'Раубичи'
})
  var marker = new google.maps.Marker({
    position: myLatLng4,
    map: map,
    title: 'Солнечная долина'
})
  var marker = new google.maps.Marker({
    position: myLatLng5,
    map: map,
    title: 'Якутские горы'
})
}
google.maps.event.addDomListener(window, "load", initMap);
