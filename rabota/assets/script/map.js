function initMap() {
   

    var centerLatLng = new google.maps.LatLng(53.904390, 27.559782);
    var mapOptions = {
        center: centerLatLng,
        zoom: 8
    };
    var myLatLng = { lat: 54.160205, lng: 27.834909 };
    var myLatLng2 = { lat: 54.059220, lng: 27.734622 };
    var myLatLng3 = { lat:54.181853, lng: 27.807299 };
    var myLatLng4 = { lat: 53.846617, lng: 27.514897 };
    var myLatLng5 = { lat: 53.821473,  lng: 27.019018};

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);



    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        label: '1',
        animation: google.maps.Animation.DROP,
        title: 'Силичи',
        
    });
    var marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map,
        label: '2',
        animation: google.maps.Animation.DROP,
        title: 'Раубичи'
    });
    var marker3 = new google.maps.Marker({
        position: myLatLng3,
        map: map,
        label: '3',
        animation: google.maps.Animation.DROP,
        title: 'Логойск'
    });
    var marker4 = new google.maps.Marker({
        position: myLatLng4,
        map: map,
        label: '4',
        animation: google.maps.Animation.DROP,
        title: 'Солнечная долина'
    });
    var marker5 = new google.maps.Marker({
        position: myLatLng5,
        map: map,
        label: '5',
        animation: google.maps.Animation.DROP,
        title: 'Якутские горы'
    });
    
    
}
google.maps.event.addDomListener(window, "load", initMap);
