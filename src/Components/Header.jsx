import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Header = ({ signedIn }) => {
  return (
    <header className="bg-white border-b p-4 fixed">
      <nav className="flex items-center justify-between">
        <Link to="/" className="font-medium text-lg text-blue-600">
          App Name
        </Link>
        {signedIn ? (
          <div className="flex items-center">
            <Link to="/appointments" className="px-4 py-2 bg-blue-600 text-white rounded-full">
              Appointments
            </Link>
            <Link to="/profile" className="px-4 py-2 bg-blue-600 text-white rounded-full">
              Profile
            </Link>
          </div>
        ) : (
          <div className="flex items-center">
            <Link to="/signup" className="btns px-4 py-2 bg-blue-600 text-white rounded-full">
              Sign Up
            </Link>
            <Link to="/login" className="btns px-4 py-2 bg-blue-600 text-white rounded-full">
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
