// UGLY CONSOLE LOGS
console.log("It ran: ")
console.log("Property name: ", getElementById('property-type'))

function initMap() {


    // Assassin's creed
    var styledMapType = new google.maps.StyledMapType(
        [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"},{"saturation":"-100"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#7f8d89"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2b3638"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2b3638"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}],{name: 'Styled Map'});

    // Marauder's map
    var styledMapType = new google.maps.StyledMapType(
        [{"featureType":"all","elementType":"all","stylers":[{"color":"#4b0202"},{"gamma":"2.38"},{"saturation":"0"},{"visibility":"simplified"}]},{"featureType":"all","elementType":"geometry","stylers":[{"color":"#ebc876"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"color":"#a00404"},{"weight":"0.18"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"color":"#980000"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"color":"#690000"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"color":"#950000"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"color":"#4b0202"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#fff0bc"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"transit.line","elementType":"all","stylers":[{"color":"#4b0202"},{"weight":"0.50"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#d6a95d"}]}],{name: 'Styled Map'});


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 45.5008033, lng: -73.5747155}
    });

    // ======================== POINT 1 ===================================
    var contentString = '<h3>Suggested price: 49</h3>' +
        '<h3>Actual price: 49</h3>' +
        '<p>Bedrooms: 1</p>' +
        '<p>Bathrooms: 1</p>' +
        '<p># of guests: 1</p>' +
        '<p>min_nights: 1</p>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString
    });

    var marker1 = new google.maps.Marker({
        position: {lat: 45.49331305, lng: -73.62596046},
        map: map,
        title: '1) 49 CAD'
    });
    marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
    });
    // ======================================================================

    // ======================== POINT 2 ===================================
    var contentString = '<h3>Suggested price: 51</h3>' +
        '<h3>Actual price: 50</h3>' +
        '<p>Bedrooms: 1</p>' +
        '<p>Bathrooms: 1</p>' +
        '<p># of guests: 1</p>' +
        '<p>min_nights: 3</p>';

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString
    });

    var marker2 = new google.maps.Marker({
        position: {lat: 45.4728219, lng: -73.607367},
        map: map,
        title: '1) 49 CAD'
    });
    marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
    });
    // ======================================================================

    // ======================== POINT 3 ===================================
    var contentString = '<h3>Suggested price: 38</h3>' +
        '<h3>Actual price: 37</h3>' +
        '<p>Bedrooms: 1</p>' +
        '<p>Bathrooms: 1</p>' +
        '<p># of guests: 1</p>' +
        '<p>min_nights: 1</p>';

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString
    });

    var marker3 = new google.maps.Marker({
        position: {lat: 45.5350153, lng: -73.618069},
        map: map,
        title: '1) 49 CAD'
    });
    marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
    });
    // ======================================================================

    // ======================== POINT 4 ===================================
    var contentString = '<h3>Suggested price: 45</h3>' +
        '<h3>Actual price: 43</h3>' +
        '<p>Bedrooms: 1</p>' +
        '<p>Bathrooms: 1</p>' +
        '<p># of guests: 1</p>' +
        '<p>min_nights: 1</p>';

    var infowindow4 = new google.maps.InfoWindow({
        content: contentString
    });

    var marker4 = new google.maps.Marker({
        position: {lat: 45.4785206, lng: -73.61789},
        map: map,
        title: '1) 49 CAD'
    });
    marker4.addListener('click', function() {
        infowindow4.open(map, marker4);
    });
    // ======================================================================

    // ======================== POINT 5 ===================================
    var contentString = '<h3>Suggested price: 51</h3>' +
        '<h3>Actual price: 50</h3>' +
        '<p>Bedrooms: 1</p>' +
        '<p>Bathrooms: 1</p>' +
        '<p># of guests: 1</p>' +
        '<p>min_nights: 3</p>';

    var infowindow5 = new google.maps.InfoWindow({
        content: contentString
    });

    var marker5 = new google.maps.Marker({
        position: {lat: 45.54377677, lng:	-73.62492963},
        map: map,
        title: '1) 49 CAD'
    });
    marker5.addListener('click', function() {
        infowindow5.open(map, marker5);
    });
    // ======================================================================

    // ======================== POINT 6 ===================================
    var contentString = '<h3>Suggested price: 38</h3>' +
        '<h3>Actual price: 37</h3>' +
        '<p>Bedrooms: 0</p>' +
        '<p>Bathrooms: 1</p>' +
        '<p># of guests: 1</p>' +
        '<p>min_nights: 3</p>';

    var infowindow6 = new google.maps.InfoWindow({
        content: contentString
    });

    var marker6 = new google.maps.Marker({
        position: {lat: 45.47268257, lng: -73.60664348},
        map: map,
        title: '1) 49 CAD'
    });
    marker6.addListener('click', function() {
        infowindow6.open(map, marker6);
    });
    // ======================================================================

    // ======================== POINT 7 ===================================
    var contentString = '<h3>Suggested price: 55</h3>' +
        '<h3>Actual price: 63</h3>' +
        '<p>Bedrooms: 2</p>' +
        '<p>Bathrooms: 1</p>' +
        '<p># of guests: 2</p>' +
        '<p>min_nights: 1</p>';

    var infowindow7 = new google.maps.InfoWindow({
        content: contentString
    });

    var marker7 = new google.maps.Marker({
        position: {lat: 45.4580748, lng: -73.56901},
        map: map,
        title: '1) 49 CAD'
    });
    marker7.addListener('click', function() {
        infowindow7.open(map, marker7);
    });
    // ======================================================================


    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}



function geocodeAddress(geocoder, styledMap) {
    var contentString = '<h3>Suggested price: 49</h3>' +
        '<h3>Actual price: 49</h3>' +
        '<p>Bedrooms: 1</p>' +
        '<p>Bathrooms: 1</p>' +
        '<p># of guests: 1</p>' +
        '<p>min_nights: 1</p>';


    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            styledMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: styledMap,
                position: results[0].geometry.location
            });
            var infowindow = new google.maps.InfoWindow({
                content: contentString
                // content: '<p>Suggested Price: $150 CAD</p>'
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




