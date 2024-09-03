import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import MedicAidAI from './pages/MedicAidAI';
import MedicAidPharmacy from './pages/MedicAidPharmacy';
import LogIn from './pages/Login';

const App = () => {
  
  return (
    <BrowserRouter>
    
      <Routes>
    
        <Route path='medicAidAI' element={<MedicAidAI/>}/>
        <Route path='medicAidPharma' element={<MedicAidPharmacy/>}/>
        <Route path='login' element={<LogIn/>}/>
        <Route path='/' element={<Navigation/>}/>
        
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App