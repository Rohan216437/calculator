import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Calculator from './pages/calcComponents/Calc';
import SimonGame from './pages/simonSays/SimonGame'; 

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/calculator" element={<Calculator />} /> 
      <Route path="/simon" component={<SimonGame />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
