import React, {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import './UserRegistration.css'
// import './UserRegistration.jsx'

<script src="https://upload-widget.cloudinary.com/latest/global/all.js" type="text/javascript">  
</script>

const DoctorRegistration = () => {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[nic, setNic] = useState("");
    const[dob, setDob] = useState("");
    const[gender, setGender] = useState("");
    const[password, setPassword] = useState("");
    const [doctorDepartment, setDoctorDepartment] = useState("");
    const [doctorLiscence, setDoctorLiscence] = useState("");
    const [doctorAvatar, setDoctorAvatar] = useState("");

    // const SubmitImage = () => {
    //     const data = new FormData();
    //     data.append("file", doctorAvatar);
    //     data.append("upload_preset", "medicaid");
    //     data.append("cloud_name", "MedicAid");

    //     fetch("https://api.cloudinary.com/v1_1/MedicAid/image/upload", 
    //         {
    //             method:"post",
    //             body:data
    //         })
    //         .then((res)=>
    //         {
    //             res.json();
    //         }).then((data) => {
    //             console.log(data);
    //         })
    //         .catch((err))
    //         {
    //             toast.err( "An error occured while uploading image");
    //         }
    // }

    const HandleDoctorSignup = async (e) => {
        e.preventDefault();
        try 
        {
            await axios
            .post
            ("http://localhost:4000/api/v1/user/doctor/addnew?docAvatar=",
                {firstName, lastName, email, phone, nic, dob, gender, password, doctorDepartment, doctorLiscence, doctorAvatar},
                {
                    withCredentials: true,
                    headers: { "Content-Type" : "application/json"}
                }
            ).then(res => 
            {
                toast.success(res.data.message);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setNic("");
                setDob("");
                setGender("");
                setPassword("");
                setDoctorDepartment("");
                setDoctorLiscence("");
                setDoctorAvatar("");

            });
        } catch (error) 
        {
            toast.error(error.response.data.message || "An error occured");
        }
    };

  return (
    <div className='whole-signup-container'>
        <div className='main-signup-container' >
            <div className="signup-toggle">
                <a href='/signup'>Patient</a>
                <a href='/doctorsignup'>Doctor</a>
            </div>
            <div className="signup-container" >
                <h1 className="signup-title">SignUp!</h1>
                <p className="signup-subtitle">Create your Account and get medical facilities in your hand</p>
                <form className="signup-form" onSubmit={HandleDoctorSignup} id='doctor-signup'>
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
                    <div className='form-group inline'>
                        <div className="form-group">
                            <label htmlFor="doctorDepartment">Department</label>
                            <select 
                                // id='dropdown' 
                                value={doctorDepartment}
                                onChange={(e) => setDoctorDepartment(e.target.value)}
                                required >
                                <option value="Select">Select</option>
                                <option value="Anesthesiology">Anesthesiology</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Clinical nutrition">Clinical nutrition</option>
                                <option value="Dentistry">Dentistry</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Emergency Medicine">Emergency Medicine</option>
                                <option value="Endocrinologist">Endocrinologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                                <option value="General surgery">General surgery</option>
                                <option value="Internal medicine">Internal medicine</option>
                                <option value="Nephrologist">Nephrologist</option>
                                <option value="Neurology">Neurology</option>
                                <option value="Obstetrics and gynaecology">Obstetrics and gynaecology</option>
                                <option value="Oncologist">Oncologist</option>
                                <option value="Ophthalmology">Ophthalmology</option>
                                <option value="Orthopaedist">Orthopaedist</option>
                                <option value="Otolaryngologists">Otolaryngologists</option>
                                <option value="Pathology">Pathology</option>
                                <option value="Physiotherapist">Physiotherapist</option>
                                <option value="Plastic surgery">Plastic surgery</option>
                                <option value="Psychiatry">Psychiatry</option>
                                <option value="Pulmonology">Pulmonology</option>
                                <option value="Radiology">Radiology</option>
                                <option value="Urology">Urology</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="docLiscence">Liscence No.</label>
                            <input 
                                type='text'
                                placeholder="Enter your Liscence Number"
                                value={doctorLiscence}
                                onChange={(e) => setDoctorLiscence(e.target.value)}
                                required >
                                
                            </input>
                        </div>
                    </div>
                    <div className='form-group inline'>
                        <div className="form-group">
                            <label htmlFor="docAvatar">Avatar</label>
                            <input 
                                type='file'
                                value={doctorAvatar}
                                onChange={(e) => setDoctorAvatar(e.target.value)}
                                required >
                                
                            </input>
                        </div>
                        {/* <div>
                            <button type="submit" className="upload-button" onClick={SubmitImage} >Upload</button>
                        </div> */}
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

export default DoctorRegistration