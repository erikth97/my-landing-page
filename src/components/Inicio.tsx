import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from '../assets/inicio.png'; // Asegúrate de usar la ruta correcta

const Inicio: React.FC = () => {
  return (
    <Box id="inicio" sx={{ height: '100vh', bgcolor: '#5BC0EB', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '90px', textAlign: 'center' }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 4 }}>
        CENTRO DE SALUD TAMAULIPAS
      </Typography>
      <img src={Image} alt="Centro de Salud Tamaulipas" style={{ maxWidth: '80%', height: 'auto' }} />
      <Typography variant="h6" sx={{ mt: 4, mx: 2, fontWeight: 'bold' }}>
        Bienvenido al Centro de Salud Tamaulipas, brindamos una variedad de servicios médicos para la salud y bienestar de nuestra comunidad.
        <br />
        Visítanos para recibir atención de calidad en un ambiente seguro y profesional.
      </Typography>
    </Box>
  );
};

export default Inicio;
