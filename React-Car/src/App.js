import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarValuation from './pages/CarValuation';
import About from './pages/CarInsurence';
import Contact from './pages/CarFinancing';
import Shoping from './pages/CarMechanic';
import Cart from './pages/CarWash';
import Detailing from './pages/Detailing';
import Services from './pages/Services';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route index element={<CarValuation />} />
          <Route path='contact' element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shoping />} />
          <Route path="cart" element={<Cart />} />
          <Route path="detailing" element={<Detailing />} />
          <Route path="services" element={<Services />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
