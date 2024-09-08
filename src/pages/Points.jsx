import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useLocation } from 'react-router-dom';

// Dummy location names for start and end (you can replace these with actual names if available)
const locationNames = {
  start: "Start Location Name",
  end: "End Location Name",
};

const OutputPage = ({ points }) => {
  const bounds = L.latLngBounds(points.map(p => [p.lat, p.lon]));

  // Define the path for the polyline
  const path = points.map(p => [p.lat, p.lon]);

  return (
    <div className="flex flex-col items-center justify-between px-4 mx-auto my-4 md:flex-row md:items-start md:px-8">
      {/* Left Panel */}
      <div className="w-full p-6 mb-8 bg-white rounded-md shadow-md md:mb-0 md:mr-8 md:w-1/3">
        <h2 className="mb-4 text-2xl font-semibold">Path Details</h2>

        {/* Start Location */}
        <div className="mb-4">
          <h3 className="text-lg font-medium">Input Port:</h3>
          <p>{points[0] ? `Latitude: ${points[0].lat}, Longitude: ${points[0].lon}` : 'Not Available'}</p>
          <p>{locationNames.start}</p>
        </div>

        {/* End Location */}
        <div className="mb-4">
          <h3 className="text-lg font-medium">Output Port:</h3>
          <p>{points[points.length - 1] ? `Latitude: ${points[points.length - 1].lat}, Longitude: ${points[points.length - 1].lon}` : 'Not Available'}</p>
          <p>{locationNames.end}</p>
        </div>

        <div>
          <p>The optimized path is shown on the map above. This path represents the most efficient route connecting the selected ports.</p>
        </div>
      </div>

      {/* Map */}
      <MapContainer
        center={bounds.getCenter()} 
        zoom={5} 
        className="w-full h-96 md:w-2/3"
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
        minZoom={2}
        maxZoom={10}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker for Start Point */}
        {points[0] && (
          <Marker
            position={[points[0].lat, points[0].lon]}
            icon={defaultIcon}
          />
        )}

        {/* Marker for End Point */}
        {points[points.length - 1] && (
          <Marker
            position={[points[points.length - 1].lat, points[points.length - 1].lon]}
            icon={defaultIcon}
          />
        )}

        {/* Polyline for the path */}
        {points.length > 1 && (
          <Polyline 
            positions={path}
            color="red"
            weight={3}
            opacity={0.7}
          />
        )}
      </MapContainer>
    </div>
  );
};

const defaultIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default OutputPage;