import React from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useState, useEffect, useRef} from 'react';



function About() {
  const aboutRef = useRef()
  const [isVisible, setIsVisible] = useState()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2
      }
    )

    observer.observe(aboutRef.current)
  }, [])

  return (
    <div
    className={`py-24 md:py-4 transition-all duration-1000 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-100 opacity-0'}`}
    ref={aboutRef}
    id='about'
    >
      <h1 className='hidden md:block text-4xl font-semibold mb-4'>About</h1>
      <p className='text-lg md:text-base'>
        I am <span className='font-semibold'>Rohan Gupta</span>, a passionate <span className='font-semibold'>Web Developer</span>{' '}
        with a drive for creativity, innovation, and problem-solving. This
        website serves as a showcase of my skills, projects, and achievements,
        providing you with a glimpse into my journey and what I have to offer.
        I am looking to create my career in the domain of Web Development.
      </p>
      <p className='text-lg md:text-base mb-8 mt-4'>
        Thank you for visiting my portfolio website, and I hope you enjoy
        exploring my work!
      </p>
      <div to='/pdf' className='flex items-center gap-2 text-white text-xl font-semibold  hover:text-sky-500 hover:text-2xl transition-all duration-500 ease-in-out'>
        <a href='mailto:rohangupta0729@gmail.com' className='w-30 h-12 flex items-center justify-center'>Contact me</a>
        <TrendingFlatIcon className='mt-1' />
      </div>
    </div>
  )
}

export default About