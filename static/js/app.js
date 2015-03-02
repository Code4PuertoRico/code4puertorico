(function() {
    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map').setView([18.46551, -66.11685], 15);

    var marker = L.marker([18.46551, -66.11685]).addTo(map);

    var popup = L.popup();

    marker.bindPopup('Every Tuesday,<br> in Piloto151').openPopup();

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
})();