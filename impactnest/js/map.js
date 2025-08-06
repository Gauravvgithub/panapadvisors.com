if (document.getElementById("map")) {
    mapboxgl.accessToken =
        "pk.eyJ1IjoiaG9hbmdoYW5kbiIsImEiOiJjbTdsbTkydm8wZGpiMmxxcTdvdzVqbHd3In0.HUUli-jvI1ALTBuzSeKTpw";
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v11",
        center: [-0.108968, 51.492933],
        zoom: 14,
        cooperativeGestures: true,
    });

    const geojson = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-0.108968, 51.492933],
                },
            },
        ],
    };

    for (const feature of geojson.features) {
        const el = document.createElement("div");
        el.className = "marker";

        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
    }
    var markers = [
        { coordinates: [-0.108968, 51.492933] },
    ];
    markers.forEach(function (marker) { 
        var el = createMarkerElement();
        new mapboxgl.Marker({ element: el })
            .setLngLat(marker.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<div class="map-content"><h6>New York Office</h6><p class="text caption-2"> 456 Sunset Boulevard, Los Angeles, California</p></div>'))
            .addTo(map);
    });

    function createMarkerElement() {
        var el = document.createElement('div');
        el.className = 'marker';
        return el;
    }
}

if (document.getElementById("map1")) {
    mapboxgl.accessToken =
        "pk.eyJ1IjoiaG9hbmdoYW5kbiIsImEiOiJjbTdsbTkydm8wZGpiMmxxcTdvdzVqbHd3In0.HUUli-jvI1ALTBuzSeKTpw";
    const map1 = new mapboxgl.Map({
        container: "map1",
        style: "mapbox://styles/mapbox/light-v11",
        center: [-0.108968, 51.492933],
        zoom: 14,
        cooperativeGestures: true,
    });

    const geojson1 = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-0.108968, 51.492933],
                },
            },
        ],
    };

    for (const feature of geojson1.features) {
        // create a HTML element for each feature
        const el = document.createElement("div");
        el.className = "marker";

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map1);
    }
}

if (document.getElementById("map2")) {
    mapboxgl.accessToken =
        "pk.eyJ1IjoiaG9hbmdoYW5kbiIsImEiOiJjbTdsbTkydm8wZGpiMmxxcTdvdzVqbHd3In0.HUUli-jvI1ALTBuzSeKTpw";
    const map2 = new mapboxgl.Map({
        container: "map2",
        style: "mapbox://styles/mapbox/light-v11",
        center: [-0.108968, 51.492933],
        zoom: 14,
        cooperativeGestures: true,
    });

    const geojson2 = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-0.108968, 51.492933],
                },
            },
        ],
    };

    for (const feature of geojson2.features) {
        // create a HTML element for each feature
        const el = document.createElement("div");
        el.className = "marker";

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map2);
    }
}
