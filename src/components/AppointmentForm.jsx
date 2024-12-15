import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const AppointmentForm = ({ onSubmit }) => {
  const [patientName, setPatientName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientName && doctor && date) {
      onSubmit({ patientName, doctor, date });
      setPatientName('');
      setDoctor('');
      setDate('');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 2,
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
        Agendar Cita
      </Typography>
      <TextField
        label="Nombre del Paciente"
        variant="outlined"
        fullWidth
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        required
      />
      <TextField
        label="Doctor"
        variant="outlined"
        fullWidth
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        required
      />
      <TextField
        label="Fecha"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        fullWidth
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Agendar Cita
      </Button>
    </Box>
  );
};

export default AppointmentForm;
