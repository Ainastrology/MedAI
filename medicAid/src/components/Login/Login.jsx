import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import './Login.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { assets } from '../../assets/assets';

const Login = () => {

    // State management inside the functional component
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const HandleLogin = async (e) => 
  {
    e.preventDefault();
    try 
    {
      await axios
      .post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      ).then(res => {
        toast.success(res.data.message);
        // Resetting form values after success
        setEmail("");
        setPassword("");
        setRole("");
      });
      
    } catch (error) {
      toast.error(error.response.data.message || "An error occurred");
    }
  };
  return (
    <div className="login-page">
      <div className="left-image-container">
            <div className="logo-and-title">
                <img src={assets.Logo} alt="MedicAid Logo" className="logo-image" />
                <div className="title-and-pitch">
                    <h1 className="page-title">MedicAid</h1>
                    <h5 className="logo-pitch">
                    From Query to Cure, We Make Health Secure
                    </h5>
                </div>
            </div>
            <div className="image-and-tagline">
            <img src={assets.illustrationBg} alt="Medical Illustration" className="left-image" />
                <div className="tagline-container">
                    <ul className="dynamic-text">
                    <li>
                        <span>Enter your credentials <br />to stay informed,</span>
                    </li>
                    <li>
                        <span>Expert Care, Anywhere Your Health, We’ll Repair.</span>
                    </li>
                    </ul>
                </div>
            </div>
      </div>
      
      <div className="login-container">
            <h1 className="login-title">Welcome Back!</h1>
            <p className="login-subtitle">Please log in to your account</p>
            <form className="login-form" onSubmit={HandleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        // id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address" 
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        // id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password" 
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select 
                        // id='dropdown' 
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required >
                        <option value="Select">Select</option>
                        <option value="Patient">Patient</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                </div>
                
                <button type="submit" className="login-button" >Login</button>
                <div className="login-footer">
                    <a href="/" className="forgot-password-link">Forgot Password?</a>
                    <p className="signup-link">
                    Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                </div>
            </form>
      </div>
      
      <div className="swiper-container">
            <h5>Log in to Consult with Our Specialists</h5>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3} /* Show 3 images side by side */
                spaceBetween={5} /* Space between slides */
                coverflowEffect=
                {{
                    rotate: 0,
                    stretch: 0,
                    depth: 50,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation=
                {{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}>
            
            
                <SwiperSlide>
                    <img src={assets.Fdoc1} alt="slide_image_1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={assets.Fdoc5} alt="slide_image_2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={assets.Fdoc3} alt="slide_image_3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={assets.Mdoc4} alt="slide_image_4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={assets.Mdoc6} alt="slide_image_4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={assets.Mdoc2} alt="slide_image_5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={assets.Mdoc5} alt="slide_image_6" />
                </SwiperSlide>

            </Swiper>
            <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </div>
  )
}

export default Login