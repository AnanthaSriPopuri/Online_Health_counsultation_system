// Import necessary modules from Material-UI
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// Import your logo image
import logoImage from './logo.jpeg';

// Modify the ResponsiveAppBar component
function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" sx={{ top: 0, backgroundColor: 'white', marginTop: 0, marginBottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ justifyContent: 'flex-start', padding: 0 }}>
          <Avatar
            alt="Logo"
            src={logoImage}
            sx={{
              width: 40,
              height: 40,
              mr: 1,
            }}
          />
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue', fontFamily: 'YourCustomFont, sans-serif', lineHeight: '40px', marginLeft: '8px' }}>
            Health&Nutrition
          </span>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
