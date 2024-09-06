// import React from 'react'
import React from 'react';
// import DoctorList from './components/DoctorList';
// import { doctors } from './data/doctors';
import '../components/findDoctor/DoctorList/DoctorList.css';
import DoctorList from '../components/findDoctor/DoctorList/DoctorList';
import { doctors } from '../components/findDoctor/Doctors/doctors';



const FindDoctor = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Doctor Profiles</h1>
      </header>
      <DoctorList doctors={doctors} />
    </div>
  )
}

export default FindDoctor