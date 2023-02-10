import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=" opacity-75 bg-cover h-screen bg-center py-10 bg-[url('./src/assets/bg-image.jpg')]">
    
      <main className="container mt-10 flex items-center leading-10 justify-center h-5/6 flex-col backdrop-blur-sm bg-white/30 w-2/3 m-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">Welcome to the Appointment Scheduling App</h1>
        <p className="text-xl text-center mb-6 text-black">
          Easily schedule appointments and manage your business from one convenient location.
        </p>
        <Link to="/login" className="bg-gray-800 hover:bg-gray-500 text-center text-white font-bold py-2 px-4 rounded ">
         Get Started
        </Link>
      </main>
    </div>
  );
};
export default Home;
