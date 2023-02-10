import './App.css'
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Sidebar from "./Components/Sidebar"
import Dashboard from './Components/Dashboard';
import Calendar from './Components/Calender';

const App = () => {
  return (
    <div className="app bg-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={< Signup />} />
        <Route path="/Sidebar" element={< Sidebar />} />
        <Route path="/Dashboard" element={< Dashboard />} />
      </Routes>
      


      
    </div>
  );
};

export default App;
