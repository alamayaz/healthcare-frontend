import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [form, setForm] = useState({ email: '', username: '', password: '' });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      navigate('/dashboard');
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/auth/register/', form);
      alert('Registration successful!');
    } catch (err) {
      alert('Registration failed.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-80 space-y-4">
        <h2 className="text-xl font-semibold">Register</h2>
        <input name="email" type="email" placeholder="Email" className="w-full border p-2" onChange={handleChange} />
        <input name="username" type="text" placeholder="Username" className="w-full border p-2" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="w-full border p-2" onChange={handleChange} />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
