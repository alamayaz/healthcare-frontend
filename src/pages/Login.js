import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api/';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      navigate('/dashboard');
    }
  }, []);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}auth/login/`, form);
      localStorage.setItem('access_token', res.data.access);
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (err) {
      toast.error('Login failed.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80 space-y-4">
        <h2 className="text-xl font-semibold">Login</h2>
        <input name="username" type="text" placeholder="Username" className="w-full border p-2" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="w-full border p-2" onChange={handleChange} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
