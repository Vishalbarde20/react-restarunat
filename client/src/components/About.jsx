import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
      <Box>
        <Typography variant="h3" component="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          Our restaurant has been serving delicious meals to our customers for years. We pride ourselves on our quality ingredients and exceptional service.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
