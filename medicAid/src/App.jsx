import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MedAI from './components/MedAI/MedAI';
import Pharma from './components/Pharma/Pharma';
import MainPharma from './components/Pharma/MainPharma';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  
  return (
    <BrowserRouter>
    
      <Routes>
    
        <Route path='medicAidAI' element={<MedAI/>}/>
        <Route path='medicAidPharma' element={<Pharma/>}/>
        <Route path='Pharmacy' element={<MainPharma/>}/>
        <Route path='/' element={<Navigation/>}/>
        
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App