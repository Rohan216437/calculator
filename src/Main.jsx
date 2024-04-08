import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-4">
        <Link to="/calculator" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Calculator</Link>
        <Link to="/simon" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Simon Game</Link>
      </div>
    </div>
  );
}

export default Main;
