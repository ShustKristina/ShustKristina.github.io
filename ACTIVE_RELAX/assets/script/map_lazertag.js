function initMap() {
    
    var centerLatLng = new google.maps.LatLng(53.904390, 27.559782);
    var mapOptions = {
        center: centerLatLng,
        zoom: 7
    };  
    var myLatLng = { lat:53.964113, lng: 27.653549 };
    var myLatLng2 = { lat: 53.789416, lng: 27.505395 };
    var myLatLng3 = {lat: 53.975386, lng: 27.288496 };
    var myLatLng4 = { lat: 53.944000,   lng: 27.328435};

    var map2 = new google.maps.Map(document.getElementById("mapLazer"), mapOptions);



    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map2,
        label: '1',
        animation: google.maps.Animation.DROP,
        title: 'UFO',
        
    });
    var marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map2,
        label: '2',
        animation: google.maps.Animation.DROP,
        title: 'Клуб 067'
    });
 
    var marker4 = new google.maps.Marker({
        position: myLatLng3,
        map: map2,
        label: '3',
        animation: google.maps.Animation.DROP,
        title: 'Laser Battle'
    });
    var marker5 = new google.maps.Marker({
        position: myLatLng4,
        map: map2,
        label: '4',
        animation: google.maps.Animation.DROP,
        title: 'Colt'
    });
    
    
}
google.maps.event.addDomListener(window, "load", initMap);
