import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers';

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = L.map(mapRef.current, {
      center: [29.8956366, -0.5639195999999984],
      crs: L.CRS.EPSG3857,
      zoom: 4,
      zoomControl: true,
      preferCanvas: false,
    });

    // Add OpenStreetMap tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add GeoJSON data
    const geoJsonData = {
      geometry: {
        type: 'LineString',
        coordinates: [
          [-73.9779, 40.7081], [-74.0488, 40.6676], [-74.0561, 40.6285], [-74.0456, 40.6061],
          // Additional coordinates here
          [72.80777, 18.941361],
        ],
      },
      properties: {
        duration_hours: 340.4937455567858,
        length: 15134.266002508017,
        units: 'km',
      },
      type: 'Feature',
    };

    const geoJsonLayer = L.geoJson(geoJsonData, {
      onEachFeature: (feature, layer) => {
        layer.on({});
      },
    }).addTo(map);

    // Add markers
    const marker1 = L.marker([40.7127281, -74.0060152]).addTo(map);
    marker1.setIcon(
      L.AwesomeMarkers.icon({
        extraClasses: 'fa-rotate-0',
        icon: 'info-sign',
        iconColor: 'white',
        markerColor: 'green',
        prefix: 'glyphicon',
      })
    );

    const marker2 = L.marker([19.0785451, 72.878176]).addTo(map);
    marker2.setIcon(
      L.AwesomeMarkers.icon({
        extraClasses: 'fa-rotate-0',
        icon: 'info-sign',
        iconColor: 'white',
        markerColor: 'red',
        prefix: 'glyphicon',
      })
    );
  }, []);

  return (
    <div>
      <div ref={mapRef} style={{ height: '100vh', width: '100%' }} />
    </div>
  );
};

export default MapComponent;