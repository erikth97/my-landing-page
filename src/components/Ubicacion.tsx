import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Ubicacion: React.FC = () => {
  return (
    <Box id="ubicacion" sx={{ minHeight: '100vh', p: 4, pt: 8, bgcolor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            title="Ubicación en Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.286189859992!2d-100.14685702537273!3d25.66180611272712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c241b0b9ffb1%3A0x4c18f9f5c1910a2d!2sC.S.U%20Tamaulipas!5e0!3m2!1ses-419!2smx!4v1721338662287!5m2!1ses-419!2smx"
            width="600"
            height="450"
            style={{ border: 0, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
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
              Calle Guadalupe Victoria 100, Tamaulipas.
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
