import React, { useEffect, useState } from 'react';
import API from '../services/api';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

const Mappings = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [mappings, setMappings] = useState([]);
  const [form, setForm] = useState({
    patient: '',
    doctor: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [patientRes, doctorRes, mappingRes] = await Promise.all([
        API.get('patients/'),
        API.get('doctors/'),
        API.get('mappings/')
      ]);
      setPatients(patientRes.data);
      setDoctors(doctorRes.data);
      setMappings(mappingRes.data);
    } catch (err) {
      alert('Failed to load data');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('mappings/', {
        patient: parseInt(form.patient),
        doctor: parseInt(form.doctor),
      });
      fetchData();
      toast.success('Doctor assigned successfully!');
    } catch {
        toast.error('Failed to assign doctor.');
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to unassign this doctor?");
    if (!confirm) return;
  
    try {
      await API.delete(`mappings/${id}/`);
      fetchData();
      toast.success('Mapping removed!');
    } catch {
      toast.error('Failed to unassign.');
    }
  };
  

  const getPatientName = (id) => {
    const patient = patients.find(p => p.id === id);
    return patient ? patient.name : `Patient ${id}`;
  };
  
  const getDoctorName = (id) => {
    const doctor = doctors.find(d => d.id === id);
    return doctor ? doctor.name : `Doctor ${id}`;
  };
  

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Patient-Doctor Mapping</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select name="patient" value={form.patient} onChange={handleChange} required className="border p-2">
              <option value="">Select Patient</option>
              {patients.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>

            <select name="doctor" value={form.doctor} onChange={handleChange} required className="border p-2">
              <option value="">Select Doctor</option>
              {doctors.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Assign</button>
        </form>

        {/* Mappings List */}
        <ul className="space-y-2">
          {mappings.map((m) => (
            <li key={m.id} className="flex justify-between items-center bg-gray-100 p-3 rounded">
            <p>
                🧑 {getPatientName(m.patient)} → 👨‍⚕️ {getDoctorName(m.doctor)}
            </p>
              <button onClick={() => handleDelete(m.id)} className="bg-red-500 text-white px-3 py-1 rounded">Unassign</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Mappings;
