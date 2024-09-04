import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import MedicAidAI from './pages/MedicAidAI';
import MedicAidPharmacy from './pages/MedicAidPharmacy';
// import LogIn from './pages/Login';
import LogInPage from './pages/LoginPage';
import './App.css'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';

const App = () => {
  
  return (
    <BrowserRouter>
    
      <Routes>
    
        <Route path='medicAidAI' element={<MedicAidAI/>}/>
        <Route path='medicAidPharma' element={<MedicAidPharmacy/>}/>
        <Route path='login' element={<LogInPage/>}/>
        <Route path='/' element={<Navigation/>}/>
        <Route path='home' element={<Home/>}/>
        
        
      </Routes>
      <ToastContainer position="top-center" />
    
    </BrowserRouter>
  )
}

export default App