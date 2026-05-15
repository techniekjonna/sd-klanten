import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Service } from './pages/Service';
import { Tarieven } from './pages/Tarieven';
import { Airport } from './pages/Airport';
import { Contact } from './pages/Contact';

export const UwTaxiHeerlen = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/service" element={<Service />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/airport" element={<Airport />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
