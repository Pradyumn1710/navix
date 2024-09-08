import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
// import Navbar from './my_components/Navbar'; // Import the Navbar component
import HomePage from './pages/HomePage'; // Import the HomePage component
import MapPage from './pages/MapPage'; // Import the MapPage component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/map_card" element={<Map_card />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
