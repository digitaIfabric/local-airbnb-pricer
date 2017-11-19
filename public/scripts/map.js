function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: 45.5008033, lng: -73.5747155}
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

var contentString = '<p>Suggested Price: $150 CAD</p>'

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
            var address_lat = marker.getPosition().lat();
            var address_lng = marker.getPosition().lng();
            console.log("position: ", address_lat,", ", address_lng)
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });


}

