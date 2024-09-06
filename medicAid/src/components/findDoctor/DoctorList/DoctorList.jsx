// src/components/DoctorList.jsx
import React from 'react';
import DoctorProfile from './DoctorProfile';
import './DoctorList.css';

const DoctorList = ({ doctors }) => {
  return (
    <div className="doctor-list">
      {doctors.map((doctor, index) => (
        <DoctorProfile 
          key={index}
          name={doctor.name}
          speciality={doctor.speciality}
          clinicPhone={doctor.clinicPhone}
          hospitalName={doctor.hospitalName}
          address={doctor.address}
        />
      ))}
    </div>
  );
};

export default DoctorList;
