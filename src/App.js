import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import Main from './Main';
import Calculator from './pages/calcComponents/Calc'; // Import Calculator component
import SimonGame from './pages/simonSays/SimonGame'; // Import SimonGame component

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Main />} /> {/* Set Main as the default component */}
      <Route path="/calculator" element={<Calculator />} /> {/* Route for Calculator */}
      <Route path="/simon" component={<SimonGame />} /> {/* Route for SimonGame */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
