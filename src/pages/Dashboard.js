import React from 'react';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[calc(100vh-64px)] text-center px-4">
        <br></br>
        <h2 className="text-3xl font-bold mb-2">
          Welcome to the Healthcare Dashboard 👩‍⚕️
        </h2>
        <p className="text-gray-600 text-lg">Choose a tab above to manage your data.</p>
      </div>
    </>
  );
};

export default Dashboard;
