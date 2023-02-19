import { React, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useNavigate } from 'react-router-dom';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Sidebar from "./Components/Sidebar"
import Dashboard from './Components/Dashboard';
import Calendar from './Components/Calender';
import Usermgt from './Components/Usermgt';
import Receipts from './Components/Receipts';
import AuthProvider from './utils/AuthContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [User, setUser] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:5500/auth/login/success", {
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          setIsLoggedIn(true);
          return res.json();
        } else {
          setIsLoggedIn(false);
          throw new Error('Failed to fetch user data');
        }
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(User)
  return (
    <div className="app bg-white">
      
      <AuthProvider value={{ isLoggedIn, User }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={< Signup />} />
          <Route path="/Sidebar" element={< Sidebar />} />
          <Route
            path="/Dashboard/*"
            element={
              isLoggedIn ? (
                <Dashboard />
              ) : (
                <Navigate to="/" replace />
              )
            }
          >
            <Route path="Calender" element={<Calendar />} />
            <Route path="Usermgt" element={<Usermgt />} />
            <Route path="Receipts" element={<Receipts />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;

