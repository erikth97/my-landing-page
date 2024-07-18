import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Ubicacion: React.FC = () => {
  return (
    <Box id="ubicacion" sx={{ minHeight: '100vh', p: 4, pt: 8, bgcolor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            title="Ubicación en Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.489986288736!2d-100.23965698557012!3d20.67642190587871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c8efab3b62217%3A0x91a5082024a6f3a!2sC.%20Guadalupe%20Victoria%20100%2C%20Tamaulipas%2C%2067190%20Guadalupe%2C%20N.L.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1674979229871!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: '#5BC0EB', p: 4, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <Typography variant="h4" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold', color: '#004E89' }}>
              Ubicación
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#FFFFFF', textAlign: 'center', fontWeight: '500', lineHeight: 1.5 }}>
            CENTRO DE SALUD TAMAULIPAS
            <br />
            Avenida Coahuila 101, Tamaulipas.
            <br />
            Guadalupe, N.L., MX
            <br />
            C.P. 67190
            <br />
            Horario: Lu-Vi de 8:00 AM a 4:00 PM
            <br />
            Jurisdicción Sanitaria: 4
            <br />
            CLUES: NLSSA002296
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ubicacion;
