import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Menu = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
      <Box>
        <Typography variant="h3" component="h2" gutterBottom>
          Our Menu
        </Typography>
        <Typography variant="body1">
          Explore our wide range of delicious dishes, from appetizers to desserts.
        </Typography>
      </Box>
    </Container>
  );
};

export default Menu;
