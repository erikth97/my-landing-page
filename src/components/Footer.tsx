import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#0078D7', py: 3, px: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
        &copy; 2024 Centro de Salud Tamaulipas. Todos los derechos reservados.
      </Typography>
      <Typography variant="body1" sx={{ color: '#FFFFFF', mt: 1 }}>
        Sitio desarrollado por{' '}
        <Link href="https://www.linkedin.com/in/eriktamayoh/" target="_blank" sx={{ color: '#FFFFFF', textDecoration: 'underline' }}>
          Erik Tamayo
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
