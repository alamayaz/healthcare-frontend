import React, { useEffect, useState } from 'react';
import API from '../services/api';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';


const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    name: '',
    specialty: '',
    email: '',
  });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await API.get('doctors/');
      setDoctors(res.data);
    } catch (err) {
        toast.error('Failed to fetch doctors.');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('doctors/', form);
      setForm({ name: '', specialty: '', email: '' });
      fetchDoctors();
      toast.success('Doctor added!');
    } catch (err) {
      toast.error('Failed to add doctor. Email may already exist.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`doctors/${id}/`);
      fetchDoctors();
      toast.success('Doctor deleted!');
    } catch {
      toast.error('Delete failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Doctors</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="border p-2" />
            <input name="specialty" value={form.specialty} onChange={handleChange} placeholder="Specialty" required className="border p-2" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required className="border p-2" />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Doctor</button>
        </form>

        {/* List */}
        <ul className="space-y-2">
          {doctors.map((doc) => (
            <li key={doc.id} className="flex justify-between items-center bg-gray-100 p-3 rounded">
              <div>
                <p className="font-semibold">{doc.name} ({doc.specialty})</p>
                <p className="text-sm text-gray-600">{doc.email}</p>
              </div>
              <button onClick={() => handleDelete(doc.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Doctors;
