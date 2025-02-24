import { useState } from 'react'
import './App.css'
import ProductNEW from './components/ProductNEW'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Failed from './Failed';
import Success from './Success';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductNEW />} />
          <Route path="/failed" element={<Failed />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
