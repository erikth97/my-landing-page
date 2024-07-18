import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import { Link } from 'react-scroll';
import Logo from '../assets/img-fondo.png.png';

const Navbar: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', top: '10px', zIndex: 1300 }}>
      <AppBar position="static" sx={{ margin: '0 10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', width: 'calc(100% - 40px)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', padding: '0 24px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
            <IconButton edge="start" color="inherit" aria-label="logo" sx={{ marginRight: 4 }}>
              <img src={Logo} alt="logo" style={{ width: 50, height: 50 }} />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <Button color="inherit" sx={{ fontSize: '1.2rem', mx: 2 }}>
              <Link to="inicio" smooth={true} duration={500}>Inicio</Link>
            </Button>
            <Button color="inherit" sx={{ fontSize: '1.2rem', mx: 2 }}>
              <Link to="servicios" smooth={true} duration={500}>Servicios</Link>
            </Button>
            <Button color="inherit" sx={{ fontSize: '1.2rem', mx: 2 }}>
              <Link to="atencion" smooth={true} duration={500}>Atención</Link>
            </Button>
            <Button color="inherit" sx={{ fontSize: '1.2rem', mx: 2 }}>
              <Link to="ubicacion" smooth={true} duration={500}>Ubicación</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
