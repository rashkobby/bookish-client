import React, { useState } from 'react';
import Appointment from '../Utils/Appointment';
// import useFetch from '../Utils/useFetch';

const Calendar = () => {
//   const {data: userInfo, isLoading, error} = useFetch('https://nordc.herokuapp.com/details')  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([
    { time: '9:00 AM', location: 'Room 1', description: 'Meeting with John Doe' },
    { time: '10:30 AM', location: 'Room 2', description: 'Conference call with team' },
    { time: '2:00 PM', location: 'Room 3', description: 'Interview with Jane Doe' },
  ]);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-6 mt-6 border-b border-gray-700">
        <h2 className="text-3xl font-medium ">{selectedDate.toLocaleDateString()}</h2>
      </div>
      <div className="flex-1 p-4 ">
        {appointments.map((appointment, index) => (
          <Appointment key={index} time={appointment.time} location={appointment.location} description={appointment.description} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;