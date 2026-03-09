import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './estilo1.css';
import Navbar from './Menu';
import Footer from './Footer';
import Carousel from './Carrusel';
import Carta from './carta';
import QuienesSomos from './quienesomos';
import Productos from './productos';
import Proveedores from './Proveedores';
import Contacto from './Contacto';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            {/* Default home route → hero + carta */}
            <Route path="/" element={<><Carousel /><Carta /></>} />
            <Route path="/Carta" element={<><Carousel /><Carta /></>} />
            <Route path="/quienesomos" element={<QuienesSomos />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/Proveedores" element={<Proveedores />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
