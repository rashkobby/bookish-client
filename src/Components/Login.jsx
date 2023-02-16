import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import  useFetch  from '../Utils/useFetch';
import { FaSignInAlt } from 'react-icons/fa';
import Axios from 'axios'

const Login = () => {
  // const {data: userInfo, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { response, error } = useFetch(`/`, {
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status } = await response();
    if (status === 200) {
      setIsLoggedIn(true);
    }
  };

  const navigate = useNavigate()
  //Requesting on http://localhost:6000/auth/google once user click on sign in with google
  const signInWithGoogle = () => {
    window.open("http://localhost:5500/auth/google", "_self", 'toolbar=no, scrollbars=yes, resizable=no, width=1000, height=auto')
  }
  

  return (
    <div className='bg-gray-800 min-h-screen flex items-center justify-center'>
      <form
        className='bg-white p-6 rounded-lg shadow-md'
        onSubmit={handleSubmit}
      >
        <h1 className='text-lg font-medium mb-2'>Login</h1>
        <div className='mb-4'>
          <label
            className='block font-medium mb-2 text-gray-700'
            htmlFor='email'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full border border-gray-400 p-2'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block font-medium mb-2 text-gray-700'
            htmlFor='password'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full border border-gray-400 p-2'
          />
        </div>
        <button className='bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600'>
          <FaSignInAlt className='mr-2' />
          Login
        </button>
        {/* {error && <p className='text-red-500'>{error}</p>} */}
      </form>

      <button onClick={signInWithGoogle} className='bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600'>sign with google</button>
    </div>
  );
};

export default Login;
