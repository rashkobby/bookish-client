import React, { useState } from 'react';

const rect = [
    {
    id: 1,
    appointmentDate: "2022-06-01",
    appointmentTime: "10:00 AM",
    service: "Haircut",
    amount: 50,
    status: "Paid"
    },
    {
    id: 2,
    appointmentDate: "2022-06-03",
    appointmentTime: "02:00 PM",
    service: "Manicure",
    amount: 35,
    status: "Paid"
    },
    {
    id: 3,
    appointmentDate: "2022-06-05",
    appointmentTime: "05:00 PM",
    service: "Massage",
    amount: 75,
    status: "Paid"
    },
    {
    id: 4,
    appointmentDate: "2022-06-07",
    appointmentTime: "11:00 AM",
    service: "Facial",
    amount: 100,
    status: "Pending"
    }
    ];

const Receipts = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center">Receipts</h1>
      <table className="table-auto w-full text-left">
        <thead className="bg-gray-800 text-white">
          <tr className="text-sm font-medium">
            <th className="px-4 py-2">Appointment Date</th>
            <th className="px-4 py-2">Service</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {rect.map(receipt => (
            <tr key={receipt.id} className="text-sm">
              <td className="border px-4 py-2">{receipt.appointmentDate}</td>
              <td className="border px-4 py-2">{receipt.service}</td>
              <td className="border px-4 py-2">${receipt.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Receipts;
