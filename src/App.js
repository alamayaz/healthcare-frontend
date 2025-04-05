import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Doctors from './pages/Doctors';
import Mappings from './pages/Mappings';
import ProtectedRoute from './components/ProtectedRoute';




function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected */}
        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />
        <Route path="/patients" element={
          <ProtectedRoute><Patients /></ProtectedRoute>
        } />
        <Route path="/doctors" element={
          <ProtectedRoute><Doctors /></ProtectedRoute>
        } />
        <Route path="/mappings" element={
          <ProtectedRoute><Mappings /></ProtectedRoute>
        } />
</Routes>

    </Router>
  );
}

export default App;
