import React , { useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Leftbar from './pages/LeftBar/Leftbar'
import Rightbar from './pages/RightBar/Rightbar'

function Main() {

  const [activeSection, setActiveSection] = useState('about');
  const projectsRef = useRef(null);

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    if (activeSection === 'projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div>
      <div className="bg-gradient-to-b from-sky-500 to-black flex items-center justify-center h-screen px-12">
        <div className="w-11/12 h-5/6 items-center justify-center grid grid-cols-2">
          <Leftbar activeSection={activeSection} handleLinkClick={handleLinkClick}/>
          <Rightbar activeSection={activeSection}/>
        </div>
      </div>
      {activeSection === "projects" && <div ref={projectsRef} className="bg-black flex justify-center items-center h-screen ">
        <div  className=''>
        <Link to="/calculator" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Calculator</Link>
        <Link to="/simon" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Simon Game</Link>
        </div>
      </div>}
    </div>
  );
}

export default Main;
