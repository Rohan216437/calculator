import { useEffect, useRef, useState } from 'react'
import { skills } from '../../data'
import { Link } from 'react-router-dom'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


const Skills = () => {
  

  return (
    <div
      className={`py-24 md:py-4 overflow-x-hidden transition-all duration-1000 ease-out ${main ? 'translate-x-0 opacity-100' : '-translate-x-50 opacity-0'}`}
      ref={mainRef}
      id='skills'
    >
      <h2 className='hidden md:block text-4xl font-semibold mb-8'>Technology Skills</h2>
      <ul className="grid grid-cols-5">
        {skills.map(skill => (
          <li key={skill.id}  className="flex flex-col items-center gap-2 -4 md:p-0 hover:shadow-2xl hover:border-white cursor-pointer mb-3">
            <img src={skill.icon} className="h-16 w-16 m-2" alt={skill.name}/>
            <span  className="text-lg">{skill.name}</span>
          </li>
        ))}
      </ul>
      {/* <Link to='' className="text-white text-lg mt-8 flex items-center gap-4 hover:text-sky-500">
        <span>View Full Resume</span>
        <TrendingFlatIcon className='mt-1' />
      </Link> */}
    </div>
  )
}

export default Skills
