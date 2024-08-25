import React, { useState } from 'react';
import { Link } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from '@mui/material/Button';  // <-- Add this import
import Box from '@mui/material/Box';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Menu', to: 'menu' },
    { label: 'Services', to: 'services' },
    { label: 'Reservations', to: 'reservations' },
    { label: 'Testimonials', to: 'testimonials' },
    { label: 'Contact', to: 'contact' },
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(({ label, to }) => (
          <ListItem button key={to}>
            <Link to={to} smooth={true} duration={500} style={{ width: '100%', textDecoration: 'none', color: 'black' }}>
              <ListItemText primary={label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Restaurant Name
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {menuItems.map(({ label, to }) => (
              <Button key={to} color="inherit">
                <Link to={to} smooth={true} duration={500} style={{ color: 'white', textDecoration: 'none' }}>
                  {label}
                </Link>
              </Button>
            ))}
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
