import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
      <Box>
        <Typography variant="h3" component="h2" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1">
          We offer catering services, private dining, and more to make your dining experience memorable.
        </Typography>
      </Box>
    </Container>
  );
};

export default Services;
