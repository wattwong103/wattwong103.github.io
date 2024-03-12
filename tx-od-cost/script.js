
var map = L.map('map').setView([12.8797, 121.7740], 6);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var markers = [];

map.on('click', function(e) {
    var coordinates = e.latlng;
    document.querySelector('.marked-container').style.display = '';
    
    document.getElementById('latitude').value = coordinates.lat.toFixed(6);
    document.getElementById('longitude').value = coordinates.lng.toFixed(6);
});

function closeMarkerContainer () {
    document.querySelector('.marked-container').style.display = 'none';
    document.querySelector('.map-container').style.width = '100%';
}

function saveMarker() {
    var markerName = document.getElementById('markerName').value;
    var latitude = document.getElementById('latitude').value;
    var longitude = document.getElementById('longitude').value;

    if (markerName && latitude && longitude) {
        var marker = {
            name: markerName,
            lat: latitude,
            lng: longitude
        };

        markers.push(marker);
        updateMarkedLocations();
    } else {
        alert('Please fill in all the fields.');
    }
}

function updateMarkedLocations() {
    var markedLocationsList = document.getElementById('markedLocations');
    markedLocationsList.innerHTML = '';

    markers.forEach(function(marker) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<div>${marker.name} <button onclick="viewLocation(${marker.lat}, ${marker.lng})">View Location</button></div>`;
        markedLocationsList.appendChild(listItem);

        L.marker([marker.lat, marker.lng]).addTo(map)
        .bindPopup(marker.name).openPopup();
    });

    // Clear input values after saving
    document.getElementById('markerName').value = '';
    document.getElementById('latitude').value = '';
    document.getElementById('longitude').value = '';
}

function findRoute() {
    if (markers.length < 2) {
        alert('Please add at least two markers for routing.');
        return;
    }

    const origin = markers[0];
    const destination = markers[markers.length - 1];

    const waypoints = markers.slice(1, -1);

    calculateRoute(origin, destination, waypoints);
}

function calculateRoute(origin, destination, waypoints) {
    const coordinates = [origin, ...waypoints, destination].map(marker => [marker.lat, marker.lng]);

    const routeUrl = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${openRouteServiceApiKey}`;
    const data = {
        coordinates: coordinates,
        format: 'geojson',
        options: {
            units: 'kilometers'
        }
    };

    fetch(routeUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        displayRoute(result);
    })
    .catch(error => {
        console.error('Error calculating route:', error);
    });
}

function displayRoute(routeData) {
    // Extract the coordinates from the route data
    const coordinates = routeData.features[0].geometry.coordinates;

    // Create an array of LatLng objects from the coordinates
    const latLngs = coordinates.map(coord => L.latLng(coord[1], coord[0]));

    // Create a polyline with the coordinates and add it to the map
    const polyline = L.polyline(latLngs, { color: 'blue' }).addTo(map);

    // Fit the map bounds to the polyline
    map.fitBounds(polyline.getBounds());
}

function viewLocation(lat, lng) {
    map.panTo(new L.LatLng(lat, lng));
}
