import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import Main from './Main';
import Calculator from './components/calcComponents/Calc'; // Import Calculator component
import SimonGame from './components/simonSays/SimonGame'; // Import SimonGame component

function App() {
  return (
    <Router>
      <p>hello world</p>
      <Routes>
      <Route path="/" exact component={Main} /> {/* Set Main as the default component */}
      <Route path="/calculator" component={Calculator} /> {/* Route for Calculator */}
      <Route path="/simon" component={SimonGame} /> {/* Route for SimonGame */}
      </Routes>
    </Router>
  );
}

export default App;
