import React , { useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { apk , skills } from './data';
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
      <div ref={projectsRef} className="bg-black justify-center h-screen p-24">
        <div  className='grid grid-cols-5 gap-6 place-content-center'>
          {apk.map(apk => (
            <Link to={apk.parameter}>
              <div id={apk.id} className=" text-white font-bold flex flex-col items-center rounded">
                <img src={apk.icon} className='bg-black h-24 w-24 m-2' />
                <span className='text-lg text-center'>{apk.name}</span>
              </div>
            </Link>
          ))}

          {/* <Link to="/calculator">
            <div className=" text-white font-bold flex flex-col items-center rounded">
              <div className='bg-white h-24 w-24 m-2'></div>
              <span className='text-lg text-center'>Calculator</span>
            </div>
          </Link>
          <Link to="/simon">
          <div className=" text-white font-bold flex flex-col items-center rounded">
              <div className='bg-white h-24 w-24 m-2'></div>
              <span className='text-lg'>Simon</span>
            </div>
          </Link>
          <Link to="/calculator">
            <div className=" text-white font-bold flex flex-col items-center rounded">
              <div className='bg-white h-24 w-24 m-2'></div>
              <span className='text-lg text-center'>Calculator</span>
            </div>
          </Link>
          <Link to="/simon">
          <div className=" text-white font-bold flex flex-col items-center rounded">
              <div className='bg-white h-24 w-24 m-2'></div>
              <span className='text-lg'>Simon</span>
            </div>
          </Link>
          <Link to="/calculator">
            <div className=" text-white font-bold flex flex-col items-center rounded">
              <div className='bg-white h-24 w-24 m-2'></div>
              <span className='text-lg text-center'>Calculator</span>
            </div>
          </Link>
          <Link to="/simon">
          <div className=" text-white font-bold flex flex-col items-center rounded">
              <div className='bg-white h-24 w-24 m-2'></div>
              <span className='text-lg'>Simon</span>
            </div>
          </Link> */}

          {/* <Link to="/simon" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-24 w-24">Simon Game</Link> */}
        </div>
      </div>  
    </div>
  );
}

export default Main;
