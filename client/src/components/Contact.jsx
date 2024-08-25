import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
      <Box>
        <Typography variant="h3" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">
          Reach out to us for reservations, inquiries, or any other questions.
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
