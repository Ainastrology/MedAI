import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MedAI from './components/MedAI/MedAI';
import Pharma from './components/Pharma/Pharma';
import MainPharma from './components/Pharma/MainPharma';

const App = () => {
  
  return (
    <BrowserRouter>
    
      <Routes>
    
        <Route path='medicai' element={<MedAI/>}/>
        <Route path='pharma' element={<Pharma/>}/>
        <Route path='pharmacy' element={<MainPharma/>}/>
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App