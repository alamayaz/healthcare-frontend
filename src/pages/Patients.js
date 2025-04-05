import React, { useEffect, useState } from 'react';
import API from '../services/api';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';


const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: 'Male',
    medical_history: '',
  });

  // Fetch patients on mount
  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      console.log("📦 Fetching patients...");
  
      const res = await API.get('patients/');
      console.log("✅ Fetched data:", res.data);
  
      setPatients(res.data);
    } catch (err) {
      console.error("❌ Error fetching patients:", err.response?.data || err.message);
      toast.error('Failed to fetch patients');
    }
  };
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('patients/', form);
      setForm({ name: '', age: '', gender: 'Male', medical_history: '' });
      fetchPatients();
      toast.success('Patient added!');
    } catch (err) {
        toast.error('Failed to add patient.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`patients/${id}/`);
      fetchPatients();
      toast.success('Patient deleted!');
    } catch {
      alert('Delete failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Patients</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="border p-2" />
            <input name="age" value={form.age} onChange={handleChange} placeholder="Age" type="number" required className="border p-2" />
            <select name="gender" value={form.gender} onChange={handleChange} className="border p-2">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input name="medical_history" value={form.medical_history} onChange={handleChange} placeholder="Medical History" className="border p-2" />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Patient</button>
        </form>

        {/* List */}
        <ul className="space-y-2">
          {patients.map((p) => (
            <li key={p.id} className="flex justify-between items-center bg-gray-100 p-3 rounded">
              <div>
                <p className="font-semibold">{p.name} ({p.age}, {p.gender})</p>
                <p className="text-sm text-gray-600">{p.medical_history}</p>
              </div>
              <button onClick={() => handleDelete(p.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Patients;
