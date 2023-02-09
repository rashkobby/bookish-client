import React, { useState } from 'react';
import { FaGoogle, FaMicrosoft, FaFacebookF, FaTwitter } from "react-icons/fa";


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();

    // perform sign-up logic here (e.g. sending data to a server)
    // ...

    // reset the form fields
    
    setEmail('');
    setPassword('');
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-10">
      <h2 className="text-lg font-medium mb-4">Sign Up</h2>
            <form onSubmit={handleSignup} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
                </div>
                
                    <div className="flex items-center justify-around">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>
                        <div className="text-sm text-gray-500">or Continue with</div>
                    </div>
                    <div className="flex mt-4 p-4">
                        <button className="bg-white text-green-500 hover:bg-blue-300 border border-gray-400 rounded-full p-2 mr-2">
                            <FaGoogle size={20} />
                        </button>
                        <button className="bg-white text-blue-700 hover:bg-blue-300 border border-gray-400 rounded-full p-2 mr-2">
                            <FaMicrosoft size={20} />
                        </button>
                        <button className="bg-blue-700 text-white hover:bg-blue-300 border border-gray-400 rounded-full p-2 mr-2">
                            <FaFacebookF size={20} />
                        </button>
                        <button className="bg-blue-400 text-white hover:bg-blue-700 border border-gray-400 rounded-full p-2">
                            <FaTwitter size={20} />
                        </button>
                    </div>
            </form>
        </div>
    );
};

export default Signup;
