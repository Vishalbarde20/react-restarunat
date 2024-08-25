import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Reservations = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
      <Box>
        <Typography variant="h3" component="h2" gutterBottom>
          Reservations
        </Typography>
        <Typography variant="body1">
          Book a table online or call us to make a reservation. We look forward to serving you.
        </Typography>
      </Box>
    </Container>
  );
};

export default Reservations;
