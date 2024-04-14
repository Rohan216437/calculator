import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
// import { HashLink as Link } from 'react-router-hash-link'
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Leftbar = () => {
  const [activeLink, setActiveLink] = useState('about')

  const handleLinkClick = item => {
    setActiveLink(item)
  }

  return (
      <div className="text-white overflow-hidden m-4 ">
        <div className="md:flex md:flex-col md:justify-center md:h-45vh md:pt-8 lg:flex lg:flex-col lg:justify-center lg:h-24vh lg:pt-8 lg:mb-8">
          <div className='top mb-24 md:mb-8 lg:mb-8'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Rohan Gupta</h1>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold my-4 md:my-6 lg:my-6">Web developer</h3>
            <p className="text-base md:text-lg lg:text-xl text-blue-300">I am an enthusiastic coder, <br />dedicated to mastering FullStack Web Development.</p>  
          </div>
          <div className='center mb-20 md:mb-10 hidden md:flex flex-col '>
            <Link
              smooth
              // to='about'
              onClick={() => handleLinkClick('about')}
              className={`text-blue-300 hover:text-white hover:text-lg font-semibold flex items-center transition-all duration-200 ease-in-out cursor-pointer ${activeLink === 'about' ? 'text-white text-lg' : ''}`}
            >
              ABOUT {activeLink === 'about' ? <span className='pl-5 w-20'><TrendingFlatIcon /></span> : ''}
            </Link>
            <Link
              smooth
              // to='skills'
              onClick={() => handleLinkClick('skills')}
              className={`text-blue-300 hover:text-white hover:text-lg font-semibold flex items-center transition-all duration-200 ease-in-out cursor-pointer ${activeLink === 'skills' ? 'text-white text-lg' : ''}`}
            >
              SKILLS {activeLink === 'skills' ? <span className='pl-5 w-20'><TrendingFlatIcon /></span> : ''}
            </Link>
            <Link
              smooth
              // to='projects'
              onClick={() => handleLinkClick('projects')}
              className={`text-blue-300 hover:text-white hover:text-lg font-semibold flex items-center transition-all duration-200 ease-in-out cursor-pointer ${activeLink === 'projects' ? 'text-white text-lg' : ''}`}
            >
              PROJECTS {activeLink === 'projects' ? <span className='pl-5 w-20'><TrendingFlatIcon /></span> : ''}
            </Link>
          </div>
          <div>
            <ul className='list-none flex gap-8'>
              <li>
                <a href='#' target='_blank'>
                  <GitHub className='icon text-blue-300 hover:text-white transition-colors duration-200' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Instagram className='icon text-blue-300 hover:text-white transition-colors duration-200' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Twitter className='icon text-blue-300 hover:text-white transition-colors duration-200' />
                </a>
              </li>
              <li>
                <a
                  href='#'
                  target='_blank'
                >
                  <LinkedIn className='icon text-blue-300 hover:text-white transition-colors duration-200' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Leftbar
