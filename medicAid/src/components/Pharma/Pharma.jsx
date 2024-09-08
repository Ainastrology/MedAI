import React from 'react';
import './Pharma.css';
import { assets } from '../../assets/assets';

function Pharma() {
  const handleTextClickServaid = () => {
    window.location.href = 'https://www.servaid.com.pk'; // Navigate to Servaid Pharmacy
  };
  const handleTextClickCHS = () => {
    window.location.href = 'https://cshpharmacy.com.pk/'; // Navigate to Servaid Pharmacy
  };
  const handleTextClickMahmood = () => {
    window.location.href = 'https://mahmoodpharmacy.com.pk/'; // Navigate to Servaid Pharmacy
  };
  const handleTextClickDawai = () => {
    window.location.href = 'https://dawaai.pk/'; // Navigate to Servaid Pharmacy
  };

  return (
    <div className='main'>
      <h1 className='title'>Pharmacy Services</h1>
      <div className='stores'>
        <div className="card">
          <p onClick={handleTextClickServaid} className="clickable-text"><h3> Servaid Pharmacy</h3> <br/> Your Health, We Care</p>
          <img src={assets.code_icon} alt="Code Icon" />
          {/* <button className='mybutton'>Click Me</button> */}
        </div>
        <div className="card">
          <p onClick={handleTextClickCHS}><h3>CHS Pharmacy</h3> <br/>Committed To Serving Health 24/7 Since 2007</p>
          <img src={assets.plus_icon} alt="Code Icon" />
        </div>
        <div className="card">
          <p onClick={handleTextClickMahmood}><h3>Mahmood Pharmacy</h3> <br/>We Reach You, Wherever You Are</p>
          <img src={assets.compass_icon} alt="Bulb Icon" />
        </div>
        <div className="card">
          <p onClick={handleTextClickDawai}><h3>Dawai.pk</h3> <br/>Get The Extra Care You Need With Dawai Home Services</p>
          <img src={assets.bulb_icon} alt="Bulb Icon" />
        </div>
        <div className="card">
          <p onClick={handleTextClickDawai}><h3>Search Other Pharmacies</h3> <br/>Find the pharmacies near your location on just one click</p>
          <img src={assets.question_icon} alt="Question Icon" />
        </div>
      </div>
    </div>
  );
}

export default Pharma;
