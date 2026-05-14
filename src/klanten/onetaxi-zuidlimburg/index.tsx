import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Reserveren } from './pages/Reserveren';
import { Vliegveld } from './pages/Vliegveld';
import { Tarieven } from './pages/Tarieven';
import { Contact } from './pages/Contact';

export const OneTaxiZuidLimburg = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/reserveren" element={<Reserveren />} />
    <Route path="/vliegveld" element={<Vliegveld />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
