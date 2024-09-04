import React from 'react'

const Hero = ({ title, imageUrl }) => {
    return (
      <>
        <div className="hero container">
          <div className="banner">
            <h1>{title}</h1>
            <p>
            MedicAid is a cutting-edge online medical consultation platform designed to connect you 
            with top healthcare professionals from the comfort of your home. Our dedicated team of 
            experienced doctors and specialists is committed to providing personalized, high-quality 
            care tailored to your unique health needs. At MedicAid, we prioritize convenience and accessibility, 
            ensuring that expert medical advice is just a click away, empowering you to take control 
            of your health with confidence and ease.
            </p>
          </div>
          <div className="banner">
            <img src={imageUrl} alt="hero" className="animated-image" />
            <span>
              <img src="/Vector.png" alt="vector" />
            </span>
          </div>
        </div>
      </>
    );
  };

export default Hero