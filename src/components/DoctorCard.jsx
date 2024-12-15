import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const DoctorCard = ({ name, specialty, experience, image }) => {
  console.log('Image URL:', image); 

  return (
    <Card
      variant="outlined"
      sx={{
        marginBottom: 2,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image} 
        alt={`Foto de ${name}`} 
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body1">
          Especialidad: {specialty}
        </Typography>
        <Typography variant="body2">
          Años de experiencia: {experience}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
