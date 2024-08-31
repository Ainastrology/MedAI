import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MedAI from './components/MedAI/MedAI';

const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
    
        <Route path='medicai' element={<MedAI/>}/>
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App