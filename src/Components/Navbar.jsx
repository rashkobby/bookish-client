import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-gray-800">
      <div className="flex items-center">
        <Link to="/" className="text-white mx-5 font-medium text-xl">
          Your Logo
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => setOpen(!isOpen)}
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>
      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm text-center lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Features
          </Link>
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Pricing
          </Link>
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Contact
          </Link>
        </div>
        {!isLoggedIn ? (
          <div className="flex">
            <Link
              to="/Login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-2"
            >
              Login
            </Link>
            <Link
              to="/Signup"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div>
            <FaUser className="w-6 h-6 text-white cursor-pointer" />
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;
