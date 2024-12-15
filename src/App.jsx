import React from 'react';
import { Grid, Container } from '@mui/material';
import DoctorCard from './components/DoctorCard';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import { useHospital } from './context/HospitalContext';

const App = () => {
  const { doctors, services, appointments, addAppointment } = useHospital();

  return (
    <Container>
      <h1>Hospital Nueva Vida</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <h2>Doctores</h2>
          {doctors.map((doctor) => (
  <DoctorCard
    key={doctor.id} 
    name={doctor.name}
    specialty={doctor.specialty}
    experience={doctor.experience}
  />
))}

        </Grid>
        <Grid item xs={12} md={6}>
          <h2>Servicios</h2>
          <ServiceList services={services} />
        </Grid>
        <Grid item xs={12} md={6}>
          <h2>Agendar Cita</h2>
          <AppointmentForm onSubmit={addAppointment} />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppointmentList appointments={appointments} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
