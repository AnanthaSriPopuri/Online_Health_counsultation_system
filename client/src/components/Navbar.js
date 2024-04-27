import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logoImage from './logo.jpeg';

const services = ['Hospitals', 'Doctor-Consultation', 'Homecare', 'Medicines', 'Health-Information', 'Contact-Us'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    // Redirect to login page
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#e6e6fa' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {services.map((service) => (
              <Button
                key={service}
                onClick={handleCloseNavMenu}
                component={Link} // Use Link for client-side routing
                to={`/${service.toLowerCase().replace(/\s+/g, '-')}`} // Adjust the path as needed
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {service}
              </Button>
            ))}
          </Box>

          {/* Logout Button */}
          <Tooltip title="Logout" arrow>
            <IconButton
              color="inherit"
              onClick={() => window.location.href = "http://localhost:3000/"}
            >
<Button color="inherit" onClick={handleLogout} style={{ color: 'black' }}>Logout</Button>            </IconButton>
          </Tooltip>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
