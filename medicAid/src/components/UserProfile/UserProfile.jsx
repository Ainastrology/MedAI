// import axios from "axios";
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import './UserProfile.css'

// const UserProfile = () => {
//     // State management inside the functional component
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [nic, setNic] = useState("");
//     const [dob, setDob] = useState("");
//     const [gender, setGender] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState("");
//     const [docDepartment, setDocDepartment] = useState("");
//     const [docAvatar, setDocAvatar] = useState("");
    

//   return (
//     <div>
//         <section className="message-form" id="contact">
//         <div className=" form-component message-form">
//           <h2>Send Us A Message</h2>
//           <form onSubmit={handleMessage}>
//             <div>
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Mobile Number"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 required
//               />
//             </div>
//             <textarea
//             //   rows={7}
            
//               placeholder="Message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             />
//             <div style={{ justifyContent: "center", alignItems: "center" }}>
//               <button type="submit">Send</button>
//             </div>
//           </form>
    
//         </div>
//       </section>
//     </div>
//   )
// }

// export default UserProfile