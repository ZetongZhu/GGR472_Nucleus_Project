/*--------------------------------------------------------------------
GGR472 LAB 4: Incorporating GIS Analysis into web maps using Turf.js 
--------------------------------------------------------------------*/

// Ensure Turf.js is loaded
if (typeof turf === 'undefined') {
    console.error("Turf.js is not loaded! Make sure you have included the CDN in index.html.");
}

// Define Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiemV0b25nemh1IiwiYSI6ImNtNmllamU0ejAwMzcya3BvaHl4cHdyNTEifQ.8DeoWcpHZR2z0XiEGvRoJw';

// Initialize Mapbox map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/zetongzhu/cm8qg1o87008801qt54ez3hnd',
    center: [-79.90, 43.40],
    zoom: 10
});

// Load data layers on map load
map.on('load', () => {
    // Load food bank and bus stop data first
    Promise.all([
        fetch('data/GeoJson for Food Bank.json').then(res => res.json()),
        fetch('data/Milton Bus Stops.json').then(res => res.json()),
        fetch('data/Oakville Bus Stops.json').then(res => res.json())
    ])
    .then(([foodBanks, miltonStops, oakvilleStops]) => {
        // Merge all bus stops into one FeatureCollection
        const allBusStops = {
            type: "FeatureCollection",
            features: [...miltonStops.features, ...oakvilleStops.features]
        };

        // Define bounding box and cell size for hex grid
        const bbox = [-80.205448, 43.264334, -79.606710, 43.710887];
        const cellSize = 1; // in kilometers
        const options = { units: 'kilometers' };

        // Generate hexgrid over area
        let hexgrid = turf.hexGrid(bbox, cellSize, options);

        // Filter bus stops: only include stops within 1.5 km of any food bank
        const nearbyStops = allBusStops.features.filter(stop => {
            return foodBanks.features.some(bank => {
                const dist = turf.distance(bank, stop, { units: 'kilometers' });
                return dist <= 1.5;
            });
        });

        const filteredStops = {
            type: 'FeatureCollection',
            features: nearbyStops
        };

        // Count bus stops in each hex cell using turf.collect
        // Using property "stop_id"; if a bus stop doesn't have "stop_id", it won't contribute.
        // You may modify this if your data uses a different property name.
        const hexWithCounts = turf.collect(hexgrid, filteredStops, 'stop_id', 'stop_ids');

        hexWithCounts.features.forEach(f => {
            // If stop_ids is undefined, initialize as an empty array
            if (!f.properties.stop_ids) {
                f.properties.stop_ids = [];
            }
            f.properties.stop_count = f.properties.stop_ids.length;
        });

        // Add hexgrid as a source and add layer to display it
        map.addSource('hexgrid', {
            type: 'geojson',
            data: hexWithCounts
        });

        map.addLayer({
            id: 'hexgrid-layer',
            type: 'fill',
            source: 'hexgrid',
            paint: {
                'fill-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'stop_count'],
                    0, '#ffffff',
                    2, '#a6bddb',
                    5, '#3690c0',
                    10, '#045a8d'
                ],
                'fill-opacity': 0.6,
                'fill-outline-color': '#333'
            }
        });
    })
    .catch(error => {
        console.error("Error loading food bank or bus stop data:", error);
    });

    // Load additional layers: address points and food banks
    // Burlington Address Points
    map.addSource('burlington-address-points', {
        type: 'geojson',
        data: 'data/Burlington_Address_Points.geojson'
    });
    map.addLayer({
        id: 'burlington-address-layer',
        type: 'circle',
        source: 'burlington-address-points',
        paint: {
            'circle-radius': 3,
            'circle-color': '#1f78b4',
            'circle-opacity': 0.6
        }
    });

    // Milton Address Points
    map.addSource('milton-address-points', {
        type: 'geojson',
        data: 'data/Milton_Address_Points.geojson'
    });
    map.addLayer({
        id: 'milton-address-layer',
        type: 'circle',
        source: 'milton-address-points',
        paint: {
            'circle-radius': 3,
            'circle-color': '#33a02c',
            'circle-opacity': 0.6
        }
    });

    // Oakville Address Points
    // Note: Verify the file name. It currently reads "Oakville_Adress_Points.geojson". If this is a typo, update accordingly.
    map.addSource('oakville-address-points', {
        type: 'geojson',
        data: 'data/Oakville_Adress_Points.geojson'
    });
    map.addLayer({
        id: 'oakville-address-layer',
        type: 'circle',
        source: 'oakville-address-points',
        paint: {
            '
