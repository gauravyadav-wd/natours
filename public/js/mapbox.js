/* eslint-disable */

console.log('hello from the client side');

const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ2F1cmF2LXlhZGF2IiwiYSI6ImNsZzk0dXFiMzBuZzkzeHBpamo5NDZmbXkifQ.ziAZWA5xMCe3GvSmOUHf7w';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
});
