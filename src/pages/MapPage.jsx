import React, { useState, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Navbar from '@/my_components/Navbar_home';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card" // Assuming you're using a custom Card component
import {Label } from '@/components/ui/Label';
import { Button } from '@/components/ui/Button';
import {  Input } from '@/components/ui/Input';

const GEOCODE_API_URL = 'https://nominatim.openstreetmap.org/search';

const MapPage = () => {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [startSearchResults, setStartSearchResults] = useState([]);
  const [endSearchResults, setEndSearchResults] = useState([]);
  const [startSearchQuery, setStartSearchQuery] = useState('');
  const [endSearchQuery, setEndSearchQuery] = useState('');
  const [showStartDropdown, setShowStartDropdown] = useState(false);
  const [showEndDropdown, setShowEndDropdown] = useState(false);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const fetchStartResults = useCallback(
    debounce(async (query) => {
      if (query.trim()) {
        const response = await fetch(`${GEOCODE_API_URL}?q=${encodeURIComponent(query)}&format=json&limit=5`);
        const data = await response.json();
        setStartSearchResults(data);
        setShowStartDropdown(true);
      } else {
        setStartSearchResults([]);
        setShowStartDropdown(false);
      }
    }, 500),
    []
  );

  const fetchEndResults = useCallback(
    debounce(async (query) => {
      if (query.trim()) {
        const response = await fetch(`${GEOCODE_API_URL}?q=${encodeURIComponent(query)}&format=json&limit=5`);
        const data = await response.json();
        setEndSearchResults(data);
        setShowEndDropdown(true);
      } else {
        setEndSearchResults([]);
        setShowEndDropdown(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    fetchStartResults(startSearchQuery);
  }, [startSearchQuery, fetchStartResults]);

  useEffect(() => {
    fetchEndResults(endSearchQuery);
  }, [endSearchQuery, fetchEndResults]);

  const handleLocationSelect = (location, setLocation, setQuery, setShowDropdown) => {
    const selectedLocation = {
      lat: location.lat,
      lon: location.lon,
      display_name: location.display_name
    };
    setLocation(selectedLocation);
    setQuery(location.display_name);
    setShowDropdown(false);
  };

  const handleSave = () => {
    if (startLocation && endLocation) {
      const result = {
        start_lati: startLocation.lat,
        start_longi: startLocation.lon,
        end_lati: endLocation.lat,
        end_longi: endLocation.lon
      };

      console.log('Selected Locations:', result);

      setStartSearchQuery(startLocation.display_name || '');
      setEndSearchQuery(endLocation.display_name || '');

      setStartSearchResults([]);
      setEndSearchResults([]);
    } else {
      alert('Please select both start and end locations');
    }
  };

  return (
    <div>
      <div className='m-4 p-4 mb-8 pb-8'><Navbar/></div>
      <div className="mt-16 flex flex-col items-center justify-between px-4 mx-auto my-4 md:flex-row md:items-start md:px-8">
        
        {/* Card Component with styled UI */}
        <Card className="h-2px w-80 border border-primary m-10 pr-2 rounded-t-2xl rounded-l-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex justify-center">NaviX</CardTitle>
            <div className="flex justify-center mt-1">___________________</div>
            <CardDescription></CardDescription>
          </CardHeader>
          
          <CardContent>
            {/* Start Location Input */}
            <Label className="flex pb-1 pl-1 text-lg">From</Label>
            <Input
              placeholder='From'
              type='text'
              value={startSearchQuery}
              onChange={e => setStartSearchQuery(e.target.value)}
              onFocus={() => setShowStartDropdown(true)}
            />
            {showStartDropdown && (
              <ul className="absolute z-10 w-full mt-2 overflow-hidden bg-white border border-gray-300 rounded-md shadow-md">
                {startSearchResults.map(result => (
                  <li
                    className="p-2 transition duration-150 ease-in-out cursor-pointer hover:bg-blue-100"
                    key={result.place_id}
                    onClick={() => handleLocationSelect(result, setStartLocation, setStartSearchQuery, setShowStartDropdown)}
                  >
                    {result.display_name}
                  </li>
                ))}
              </ul>
            )}

            {/* End Location Input */}
            <Label className="flex pt-2 pb-1 pl-1 text-lg">To</Label>
            <Input
              placeholder='To'
              type='text'
              value={endSearchQuery}
              onChange={e => setEndSearchQuery(e.target.value)}
              onFocus={() => setShowEndDropdown(true)}
            />
            {showEndDropdown && (
              <ul className="absolute z-10 w-full mt-2 overflow-hidden bg-white border border-gray-300 rounded-md shadow-md">
                {endSearchResults.map(result => (
                  <li
                    className="p-2 transition duration-150 ease-in-out cursor-pointer hover:bg-blue-100"
                    key={result.place_id}
                    onClick={() => handleLocationSelect(result, setEndLocation, setEndSearchQuery, setShowEndDropdown)}
                  >
                    {result.display_name}
                  </li>
                ))}
              </ul>
            )}

            {/* Go Button */}
            <Button className="mt-5 p-5 rounded-xl flex justify-end" onClick={handleSave}>
              Go
            </Button>
          </CardContent>

          <div className="flex justify-center">_______________________________</div>
          <CardFooter className="flex space-between justify-center">
            {/* <div className="h-28 text-sm p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dicta cupiditate minus, laborum necessitatibus exercitationem.
            </div> */}
            <div className='p-4`'></div>
          </CardFooter>
        </Card>

        {/* Map */}
        <MapContainer 
          center={[20, 0]}
          zoom={3}
          className="w-full h-96 md:w-2/3 m-10 pr-2"
          maxBounds={[[ -60, -180 ], [ 80, 180 ]]}
          maxBoundsViscosity={1.0}
          worldCopyJump={false}
          minZoom={2}
          maxZoom={10}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {startLocation && (
            <Marker position={[startLocation.lat, startLocation.lon]} icon={defaultIcon} />
          )}

          {endLocation && (
            <Marker position={[endLocation.lat, endLocation.lon]} icon={defaultIcon} />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

const defaultIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default MapPage;
