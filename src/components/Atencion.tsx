import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import AtencionImage from '../assets/atencion.png'; // Asegúrate de usar la ruta correcta

const Atencion: React.FC = () => {
  return (
    <Box id="atencion" sx={{ minHeight: '100vh', p: 4, pt: 8, bgcolor: '#FFFFFF' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: '#5BC0EB', p: 6, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}>
            <Typography variant="h4" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold', color: '#004E89' }}>
              Atención al Paciente
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#FFFFFF', textAlign: 'center', fontWeight: '500', lineHeight: 1.5 }}>
              Tenemos una atención de Lunes a Viernes de 8:00 a 16:00. Para cualquier servicio de atencion es necesario contar con espacio en la agenda, la cual se abre cada día a partir de las 8:00. 
              <br />
              En servicios de odontología y nutrición, es necesario acercarse con el encargado de cada área para agendar su cita previamente. 
              <br />
              Estamos a tu disposición para brindarte el mejor servicio de salud pública en Nuevo León.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={AtencionImage} alt="Atención" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Atencion;
