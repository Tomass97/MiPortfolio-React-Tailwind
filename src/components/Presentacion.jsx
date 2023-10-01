import React, { useEffect } from 'react';
import imagenCurriculum from '../../public/imagen-curriculum.avif'
import downArrow from '../../public/down-arrow.svg'
import curriculumLogo from '../../public/curriculum.svg'
import linkedinLogo from '../../public/linkedin.svg'
import ReactGA from 'react-ga'






export default function Presentacion() {

  useEffect(() => {
    ReactGA.initialize('UA-285414902-1')
  }, [])




  return (
    <>
      <div className='flex p-1 flex-col justify-start items-center h-screen fondo '>
        <div className='flex justify-center p-16'>
          <img className='rounded-full object-cover w-56 h-auto shadow-lg' src={imagenCurriculum} alt="imagen cv" />
        </div>
        <div className="text-4xl md:text-7xl font-kanit text-color-1 my-2 text-center">
          Hola, soy Tomas,{' '}
          <strong className="degradado2">Desarrollador web.</strong> <br /> Ofrezco mis servicios de{' '}
          <strong className="degradado2">Programación y Desarrollo.</strong>
          <div className="flex justify-center md-flex-row text-center gap-3 p-10">
            <a
              href="https://www.linkedin.com/in/tomas-preduna-4b3630271/"
              target='_blank'
              className="rounded-md bg-blue-100 text-blue-800 py-3 px-8 text-base font-semibold  hover:bg-blue-200 transition-all duration-300"
            >
              <img className='w-16 h-auto' src={linkedinLogo} alt="linkedin img" />
              <div className='uppercase'>Linkedin</div>
            </a>
            <a
              href="https://drive.google.com/file/d/12VvLO9gf_2FlpIQRkjuKmCLCVUnWhd06/view?usp=sharing"
              target='_blank'
              className="rounded-md bg-blue-100 text-blue-800 py-3 px-8 text-base font-semibold  hover:bg-blue-200 transition-all duration-300"
            >
              <img className='w-16 h-auto' src={curriculumLogo} alt="cv img" />
              <div className='uppercase'>CV</div>
            </a>
          </div>
          <div className=' hidden md:flex justify-center animate-bounce'>
            <img className='w-20' src={downArrow} alt="arrow image" />
          </div>
        </div>
      </div>
    </>
  );
}
