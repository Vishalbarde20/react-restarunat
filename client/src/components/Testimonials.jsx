import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Testimonials = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
      <Box>
        <Typography variant="h3" component="h2" gutterBottom>
          Testimonials
        </Typography>
        <Typography variant="body1">
          Hear what our customers have to say about their dining experiences with us.
        </Typography>
      </Box>
    </Container>
  );
};

export default Testimonials;
