// src/components/DoctorProfile.jsx
import React from 'react';
import './DoctorProfile.css';

const DoctorProfile = ({ name, speciality, clinicPhone, hospitalName, address }) => {
  return (
    <div className="doctor-card">
      <h3 className="doctor-name">{name}</h3>
      <p className="doctor-speciality"><strong>Speciality:</strong> {speciality}</p>
      <p className="doctor-phone"><strong>Clinic Phone:</strong> {clinicPhone}</p>
      <p className="doctor-hospital"><strong>Hospital/Clinic Name:</strong> {hospitalName}</p>
      <p className="doctor-address"><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default DoctorProfile;
