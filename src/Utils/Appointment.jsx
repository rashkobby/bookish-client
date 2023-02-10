import React from 'react';

const Appointment = ({ time, location, description }) => {
  return (
    <div className="p-4 border my-2 border-gray-500 rounded-lg">
      <h3 className="text-xl font-medium text-gray-700">{time}</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="mt-2 text-gray-800">{description}</p>
    </div>
  );
};

export default Appointment;
