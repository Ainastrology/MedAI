import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import MedicAidAI from './pages/MedicAidAI';
import MedicAidPharmacy from './pages/MedicAidPharmacy';
import LogInPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage';
import UserRegistrationPage from './pages/UserRegistrationPage';
// import UserProfilePage from './pages/UserProfilePage';
// import FindDoctor from './pages/FindDoctor';

const App = () => {
  
  return (
    <BrowserRouter>
    
      <Routes>
    
        <Route path='medicAidAI' element={<MedicAidAI/>}/>
        <Route path='medicAidPharma' element={<MedicAidPharmacy/>}/>
        <Route path='login' element={<LogInPage/>}/>
        <Route path='/' element={<Navigation/>}/>
        <Route path='home' element={<HomePage/>}/>
        <Route path='signup' element={<UserRegistrationPage/>}/>
        {/* <Route path='profile' element={<UserProfilePage/>}/> */}
        
        
      </Routes>
      <ToastContainer position="top-center" />
    
    </BrowserRouter>
  )
}

export default App