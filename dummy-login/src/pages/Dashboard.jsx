import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token on logout
    navigate('/login'); // Redirect back to login
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-5xl font-bold text-green-600 mb-8'>Welcome to the Dashboard!</h1>
      <p className='text-xl text-gray-700 mb-10'>You are successfully logged in.</p>
      <button
        onClick={handleLogout}
        className='px-6 py-3 bg-red-500 text-white text-lg rounded-md shadow-lg hover:bg-red-600 transition duration-300'
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;