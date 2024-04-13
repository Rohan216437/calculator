import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
// import { HashLink as Link } from 'react-router-hash-link'
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Leftbar = () => {
  const [activeLink, setActiveLink] = useState('about')

  const handleLinkClick = item => {
    setActiveLink(item)
  }

  return (
    <div className="flex-1 text-white overflow-hidden">
     <div className="md:flex md:flex-col md:justify-center md:h-45vh md:pt-8 lg:flex lg:flex-col lg:justify-center lg:h-24vh lg:pt-8 lg:mb-8">
     <div className='top mb-24 md:mb-8 lg:mb-8'>
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Rohan Gupta</h1>
  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold my-4 md:my-6 lg:my-6">Web developer</h3>
  <p className="text-base md:text-lg lg:text-xl text-blue-300">I built accessible, inclusive <br /> products and digital experiences for the web</p>
</div>

      <div className='center'>
        <Link
          smooth
          to='#about'
          onClick={() => handleLinkClick('about')}
          className={`${activeLink === 'about' ? 'active-link' : ''}`}
        >
          ABOUT
        </Link>
        <Link
          smooth
          to='#skills'
          onClick={() => handleLinkClick('skills')}
          className={`${activeLink === 'skills' ? 'active-link' : ''}`}
        >
          SKILLS
        </Link>
        <Link
          smooth
          to='#projects'
          onClick={() => handleLinkClick('projects')}
          className={`${activeLink === 'projects' ? 'active-link' : ''}`}
        >
          PROJECTS
        </Link>
      </div>
      <div className='bottom'>
        <ul>
          <li>
            <a href='#' target='_blank'>
              <GitHub className='icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <Instagram className='icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <Twitter className='icon' />
            </a>
          </li>
          <li>
            <a
              href='#'
              target='_blank'
            >
              <LinkedIn className='icon' />
            </a>
          </li>
        </ul>
      </div>
     </div>
    </div>
  )
}

export default Leftbar
