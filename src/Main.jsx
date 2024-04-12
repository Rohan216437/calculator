import React from 'react';
import { Link } from 'react-router-dom';
import Leftbar from './pages/LeftBar/Leftbar'

function Main() {
  return (
    <div>
      <div className="bg-gradient-to-br from-sky-500 to-white flex items-center justify-center h-screen px-24">
      <div className="w-5/6 h-5/6 flex items-center justify-center">
        <Leftbar />
      </div>
    </div>
      <div className="flex justify-center space-x-4 mb-4">
        <Link to="/calculator" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Calculator</Link>
        <Link to="/simon" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Simon Game</Link>
      </div>
    </div>
  );
}

export default Main;
