import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import MedicalImage from '../assets/medical.png';
import DentalImage from '../assets/dental.png';
import NutritionImage from '../assets/nutri.png';
import VaccinationImage from '../assets/vacuna.png';

interface Servicio {
  title: string;
  description: string;
  image: string;
}

const servicios: Servicio[] = [
  { 
    title: 'Atención Médica', 
    description: 'Contamos con dos consultorios médicos que ofrecen servicio de consulta médica integral, atendido por profesionales altamente capacitados para cuidar tu salud.', 
    image: MedicalImage 
  },
  { 
    title: 'Atención Dental', 
    description: 'Nuestra unidad dental proporciona tratamientos preventivos y correctivos, garantizando una salud bucal óptima para ti y tu familia libre de caries.', 
    image: DentalImage 
  },
  { 
    title: 'Atención Nutricional', 
    description: 'Nuestros especialistas en nutrición te ayudarán a llevar un control de peso sano y una alimentación balanceada, adaptada a tus necesidades.', 
    image: NutritionImage 
  },
  { 
    title: 'Servicio de Vacunación', 
    description: 'Ofrecemos servicio de vacunación para infantes, adultos y adultos mayores, asegurando una protección completa contra enfermedades.', 
    image: VaccinationImage 
  },
];

const Servicios: React.FC = () => {
  return (
    <Box id="servicios" sx={{ minHeight: '100vh', p: 4, pt: 18, bgcolor: '#FFFFFF' }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', color: '#004E89' }}>
        Nuestros Servicios
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {servicios.map((servicio, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: '100%', maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', bgcolor: '#f8f9fa', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
              <CardMedia
                component="img"
                height="200"
                image={servicio.image}
                alt={servicio.title}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#004E89', mb: 2 }}>
                  {servicio.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {servicio.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Servicios;
