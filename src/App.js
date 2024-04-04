import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './Home';
import Perfil from './Perfil';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Perfil" element={<Perfil />} />
       </Routes>
     </BrowserRouter>
   </div>
  )
    
}

export default App;
