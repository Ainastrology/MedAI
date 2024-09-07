import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import './Home.css';
import { assets } from '../../../assets/assets';
import { Link } from "react-router-dom";

const Home = () => {
  // State management inside the functional component
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => 
  {
    e.preventDefault();
    try 
    {
      await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        { firstName, lastName, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      ).then(res => {
        toast.success(res.data.message);
        // Resetting form values after success
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      });
      
    } catch (error) {
      toast.error(error.response.data.message || "An error occurred");
    }
  };

  return (
    <div className="container">
      <header className="header">
        <nav className="top-navbar">
          <img src={assets.Logo} alt="Logo" />
          <h1 className="logo">MedicAid</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <Link to="/login"><button type="submit" className="nav-login-btn" >Login</button></Link>
        </nav>
      </header>

      {/* Hero Section */} 
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h2>Welcome to MedicAid</h2>
            <h4>Your satisfaction is our priority. MedicAid-Your Trusted Healthcare Provider.</h4>
            <p>
              MedicAid is a cutting-edge online medical consultation platform designed to connect you 
              with top healthcare professionals from the comfort of your home. Our dedicated team of 
              experienced doctors and specialists is committed to providing personalized, high-quality 
              care tailored to your unique health needs.<br/><br/>
              At MedicAid, we prioritize convenience and accessibility, ensuring that expert medical 
              advice is just a click away, empowering you to take control of your health with confidence and ease.
            </p>
            <a href="#services" className="cta-btn">Explore Services</a>
          </div>
          <div className="hero-img">
            <img src={assets.illustration} alt="Hero" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="home-card">
            <h3>Online Appointments</h3>
            <p>Our Online Appointments service allows you to conveniently schedule appointments anytime,
              anywhere, from the comfort of your home or on the go. With real-time availability, you can
              view up-to-date doctor schedules and secure your slot in just a few seconds. 
              It’s designed to provide a hassle-free experience, ensuring quick access to healthcare 
              services. Rest assured, our system is secure, offering both convenience and peace of mind
              for all your healthcare needs.</p>
          </div>
          <div className="home-card">
            <h3>Counselling & Therapy Sessions</h3>
            <p>Our Counselling & Therapy Sessions offer personalized support to help you navigate life's 
              challenges and improve mental well-being. Whether you're facing stress, anxiety, or emotional 
              difficulties, our experienced therapists are here to guide you with care and compassion. 
              We provide a safe, confidential space where you can express yourself freely. Together, we work 
              towards your emotional growth, healing, and resilience.</p>
          </div>
          <div className="home-card">
            <h3>MedicAid AI</h3>
            <p>MedicAid AI is an advanced healthcare solution designed to assist doctors and patients with 
              real-time diagnosis and treatment recommendations. Utilizing cutting-edge artificial intelligence, 
              it analyzes medical data efficiently, offering personalized health insights. With MedicAid AI, 
              healthcare becomes more accessible, accurate, and responsive. Whether it's managing patient records 
              or delivering crucial advice, our platform enhances medical care like never before.</p>
          </div>
          <div className="home-card">
            <h3>Onsite Appointments</h3>
            <p>Our Onsite Appointments service offers patients the convenience of scheduling in-person visits at 
              clinics or hospitals, ensuring timely and professional medical care. Whether you need routine check-ups 
              or specialized consultations, our platform connects you with top healthcare providers. With flexible 
              booking options, you can choose the date and time that suits your schedule. Experience seamless, 
              personalized healthcare with our reliable onsite appointment service.</p>
          </div>
          <div className="home-card">
            <h3>MedicAid Pharma</h3>
            <p>MedicAid Pharma offers a seamless way to explore and compare various online pharmacies with ease. 
              Our platform helps users locate pharmacies in their vicinity, ensuring quick access to essential medications. 
              By searching for pharmacies in a specific area, users can find the best options close to them. Whether you're 
              looking for convenience or price comparison, MedicAid Pharma simplifies your search for trusted pharmacies nearby.</p>
          </div>
          <div className="home-card">
            <h3>Online Doctor Consultation</h3>
            <p>Online Doctor Consultation provides quick and convenient access to medical advice from certified professionals, 
              right from the comfort of your home. With just a few clicks, you can schedule an appointment, discuss symptoms, 
              and receive expert guidance on treatment plans. Our platform ensures secure and confidential consultations, 
              allowing you to prioritize your health without the hassle of visiting a clinic. Get timely medical advice, 
              prescriptions, and follow-ups, all online, anytime you need it.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="hero" id="about">
        <div className="hero-container">
          <div className="hero-img">
            <img src={assets.HeroIcon} className="animated-pic" alt="Why Choose Us?" />
          </div>
          <div className="hero-content">
            <h2>Why Choose Us?</h2>
            <h4>MedicAid - From Query to Cure, We make Health Secure</h4>
            <p>
              Are you thinking about why choose MedicAid for online doctor consultations? We combine convenience, affordability, 
              and top-tier medical expertise to provide you with reliable healthcare at your fingertips.
              Our certified doctors are available 24/7, 
              ensuring you get timely consultations whenever needed. The platform is user-friendly and secure, protecting your privacy 
              while delivering professional medical advice. With flexible appointment scheduling and personalized care plans, 
              we make healthcare accessible to everyone. Trust MedicAid to offer efficient and compassionate virtual consultations 
              that fit your lifestyle.<br/><br/><br/>At MedicAid, we bring world-class healthcare to your doorstep, making it easier than ever to get the medical 
              attention you deserve. Experience the future of healthcare with instant access to expert 
              advice and personalized care, all from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="services" id="blogs">
        <h2>Blogs</h2>
        <div className="service-cards">
          <div className="home-card2">
            <h3>The Benefits of Regular Health Screenings</h3>
            <p>Regular health screenings are crucial for early detection and prevention of various medical 
              conditions. By identifying potential issues before they become serious, screenings can lead to 
              more effective treatments and better outcomes. They also help individuals stay informed about 
              their health status, allowing for timely interventions and lifestyle adjustments. Routine tests, 
              such as blood pressure checks and cholesterol levels, can reveal risk factors that might otherwise 
              go unnoticed. Staying on top of these screenings promotes long-term well-being and peace of mind. 
              Embrace a proactive approach to your health with regular check-ups and screenings.</p>
              <img src={assets.Blog1_bp} />
          </div>
          <div className="home-card2">
            <h3>The Impact of Stress on Your Health</h3>
            <p>Stress can have a profound impact on both physical and mental health. Chronic stress may lead to 
              issues such as high blood pressure, heart disease, and weakened immune function. It can also contribute 
              to anxiety, depression, and poor sleep quality. Managing stress through techniques such as mindfulness, 
              exercise, and proper nutrition is essential for maintaining overall health. Taking time to relax and engage 
              in activities you enjoy can help mitigate the effects of stress. Understanding and addressing stressors in 
              your life is key to fostering a healthier and more balanced lifestyle.</p>
              <img src={assets.Blog2_reduceMentalHealth} />
          </div>
          <div className="home-card2">
            <h3>The Importance of Staying Hydrated</h3>
            <p>Proper hydration is vital for maintaining optimal health and well-being. Drinking enough water helps regulate 
              body temperature, supports digestion, and keeps your skin looking healthy. It also plays a crucial role in 
              nutrient absorption and detoxification processes. Dehydration can lead to fatigue, headaches, and impaired 
              cognitive function. To ensure you're staying hydrated, aim to drink at least eight glasses of water a day 
              and incorporate hydrating foods into your diet. Prioritize hydration as a simple yet effective way to enhance 
              your overall health and energy levels.</p>
              <img src={assets.Blog3_Hydration} />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="message-form" id="contact">
        <div className=" form-component message-form">
          <h2>Send Us A Message</h2>
          <form onSubmit={handleMessage}>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <textarea
              rows={7}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <button type="submit">Send</button>
            </div>
          </form>
    
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} MedicAid. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
