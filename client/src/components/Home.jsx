import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our Restaurant
        </Typography>
        <Typography variant="h5">
          Experience the best culinary delights.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
