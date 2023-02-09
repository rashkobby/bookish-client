// import './App.css'
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Calendar from "./Components/Calender";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={< Signup />} />

      </Routes>
    </div>
  );
};

export default App;
