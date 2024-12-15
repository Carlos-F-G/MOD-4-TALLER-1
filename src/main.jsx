import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { HospitalProvider } from './context/HospitalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HospitalProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HospitalProvider>
  </React.StrictMode>
);
