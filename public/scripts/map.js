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

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
            var address_lat = marker.getPosition().lat();
            var address_lng = marker.getPosition().lng();
            console.log("position: ", address_lat,", ", address_lng)
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
