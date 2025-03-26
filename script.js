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



