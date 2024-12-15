import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2024 Hospital Nueva Vida. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
