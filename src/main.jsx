import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Tentang from './pages/Tentang.jsx';
import Galeri from './pages/Galeri.jsx';
import Pesan from './pages/Pesan.jsx'; // <- WAJIB ADA
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/galeri" element={<Galeri />} />
      <Route path="/pesan" element={<Pesan />} /> {/* ← INI JUGA HARUS ADA */}
    </Routes>
  </BrowserRouter>
);
