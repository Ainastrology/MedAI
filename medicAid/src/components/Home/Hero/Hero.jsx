import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Hero.css';
import { assets } from '../../../assets/assets'; // Adjust path as needed

const Hero = ({ title, imageUrl }) => {
  const departmentsArray = [
    { name: "Pediatrics", imageUrl: assets.PediaDepart },
    { name: "Orthopedics", imageUrl: assets.OrthoDepart },
    { name: "Cardiology", imageUrl: assets.CardioDepart },
    { name: "Neurology", imageUrl: assets.NeuroDepart },
    { name: "Oncology", imageUrl: assets.OncoDepart },
    { name: "Radiology", imageUrl: assets.RadioDepart },
    { name: "Physical Therapy", imageUrl: assets.TherapyDepart },
    { name: "Dermatology", imageUrl: assets.DermaDepart },
    { name: "ENT", imageUrl: assets.EntDepart }
  ];

  const responsive = {
    extraLarge: { breakpoint: { max: 3000, min: 1324 }, items: 4 },
    large: { breakpoint: { max: 1324, min: 1005 }, items: 3 },
    medium: { breakpoint: { max: 1005, min: 700 }, items: 2 },
    small: { breakpoint: { max: 700, min: 0 }, items: 1 }
  };

  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            MedicAid is a cutting-edge online medical consultation platform designed to connect you 
            with top healthcare professionals from the comfort of your home. Our dedicated team of 
            experienced doctors and specialists is committed to providing personalized, high-quality 
            care tailored to your unique health needs.<br/><br/>At MedicAid, we prioritize convenience and accessibility, 
            ensuring that expert medical advice is just a click away, empowering you to take control 
            of your health with confidence and ease.
          </p>
          <form>
            <button className='consult-btn'>Consult Today</button>
          </form>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
        </div>
      </div>

      {/* Department Section */}
      <div className="doctor-department-section">
        <h2 className="section-title">Our Departments</h2>
        <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
          {departmentsArray.map((department, index) => (
            <div key={index} className="department-card">
              <img src={department.imageUrl} alt={department.name} className="department-image" />
              <div className="department-name">{department.name}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
