import React from 'react';
import Appointment from '../Utils/Appointment';

const AppointmentList = ({ appointments }) => {
  return (
    <div className="p-4">
      {appointments.map((appointment, index) => (
        <Appointment key={index} time={appointment.time} location={appointment.location} description={appointment.description} />
      ))}
    </div>
  );
};

export default AppointmentList;
