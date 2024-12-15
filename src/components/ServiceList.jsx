import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const ServiceList = ({ services }) => {
  return (
    <List>
      {services.map((service, index) => (
  <ListItem key={index}> {/* Index está bien aquí porque los servicios son estáticos */}
    <ListItemText primary={service} />
  </ListItem>
))}

    </List>
  );
};

export default ServiceList;
