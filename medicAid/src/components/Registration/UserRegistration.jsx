import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import './UserRegistration.css'
// import './DoctorRegistration.jsx'

const UserRegistration = () => {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[nic, setNic] = useState("");
    const[dob, setDob] = useState("");
    const[gender, setGender] = useState("");
    const[password, setPassword] = useState("");

    const HandlePatientSignup = async (e) => 
    {
        e.preventDefault();
        try 
        {
            await axios 
             .post(
                "http://localhost:4000/api/v1/user/patient/register",
                { firstName, lastName, email, phone, nic, dob, gender, password},
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json"}
                }
             ).then(res => {
                toast.success(res.data.message);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setNic("");
                setDob("");
                setGender("");
                setPassword("");
             });
        } catch (error) {
            toast.error(error.response.data.message || "An error occurred");
        }
    }
  return (
    <div className='user-whole-signup-container'>    
        <div className='user-main-signup-container' >
            <div className="signup-toggle">
                <a href='/signup'>Patient</a>
                <a href='/doctorsignup'>Doctor</a>
            </div>
            <div className="signup-container" >
                <h1 className="signup-title">SignUp!</h1>
                <p className="signup-subtitle">Create your Account and get medical facilities in your hand</p>
                <form className="signup-form" onSubmit={HandlePatientSignup} id='patient-signup'>
                    <div className="form-group inline">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group inline">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address" 
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Set your password" 
                                required />
                        </div>
                    </div>
                    <div className='form-group inline'>
                        <div className="form-group">
                            <label htmlFor="phone">Phone no.</label>
                            <input
                                type="text"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input 
                                type="date" 
                                // id="password" 
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                placeholder="Enter date of birth" 
                                required />
                        </div>
                    </div>
                    <div className='form-group inline'>
                        <div className="form-group">
                            <label htmlFor="nic">CNIC</label>
                            <input 
                                type="text" 
                                // id="email" 
                                value={nic} 
                                onChange={(e) => setNic(e.target.value)}
                                placeholder="Enter your CNIC number" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select 
                                // id='dropdown' 
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required >
                                <option value="Select">Select</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className='signup-btn'> 
                        <button type="submit" className="signup-button" >SignUp</button>
                    </div>
                    
                    <div className="signup-footer">
                        <p className="login-link">
                        Already have an account? <a href="/login">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
  </div>  
  )
}

export default UserRegistration
