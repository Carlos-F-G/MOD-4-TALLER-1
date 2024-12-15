import React, { createContext, useState, useContext, useEffect } from 'react';

const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  useEffect(() => {
    setTimeout(() => {
      setDoctors([
        {
          id: 1,
          name: 'Dr. Juan Pérez',
          specialty: 'Cardiología',
          experience: 10,
          image: 'https://placeimg.com/200/300/people', // URL no funcionan//
        },
        {
          id: 2,
          name: 'Dra. Ana Gómez',
          specialty: 'Pediatría',
          experience: 8,
          image: 'https://placeimg.com/200/300/people', // URL no funcionan//
        },
      ]);
      setServices(['Cardiología', 'Pediatría', 'Radiología', 'Traumatología']);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <HospitalContext.Provider value={{ doctors, services, appointments, addAppointment, loading }}>
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospital = () => {
  return useContext(HospitalContext);
};
