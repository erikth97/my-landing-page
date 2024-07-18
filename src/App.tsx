import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import Atencion from './components/Atencion';
import Ubicacion from './components/Ubicacion';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';

const App: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <CssBaseline />
      <Navbar />
      <Inicio />
      <Servicios />
      <Atencion />
      <Ubicacion />
      <Footer />
    </div>
  );
};

export default App;
