import React, { useEffect } from 'react'

import teslaimg from '../../public/teslaimg.avif'
import cluckinbellimg from '../../public/cluckinbellimg.avif'
import auriculares from '../../public/auriculares.avif'
import reservas from '../../public/reservas.avif'
import udemy from '../../public/udemy.avif'

import reactsvg from '../../public/react.svg'
import tailwindsvg from '../../public/tailwind.svg'
import nextsvg from '../../public/next.svg'
import strapisvg from '../../public/strapi.svg'
import astrosvg from '../../public/astro.svg'
import githubsvg from '../../public/github.svg'
import prismasvg from '../../public/prisma.svg'
import vitesvg from '../../public/vite.svg'
import bootstrapsvg from '../../public/bootstrap.svg'
import sasssvg from '../../public/sass.svg'
import csssvg from '../../public/css.svg'
import ReactGA from 'react-ga'




export const Portafolio = () => {

  useEffect(() => {
    ReactGA.pageview('/Portafolio');
  }, []);
  
  return (
    <>

      <section className='contenedor md:bg-slate-200 md:gap-10 flex justify-center flex-col items-center min-h-screen p-10 md:p-20'>
        <h1 className='color-1 flex justify-center items-center text-3xl md:text-6xl text-color-1 font-kanit mb-5 md:p-10'>Mis proyectos</h1>
        <div className='md:p-12 p-6 gap-10 grid grid-cols-2'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-xl md:text-3xl font-bold item p-4 font-mono color-1 uppercase'>E-Commerce <span className='text-blue-600'>TMS-AUDIO</span></h2>
            <button className='bg-gray-900 hidden md:flex font-medium hover:bg-cyan-900 transition-all duration-300 w-64 h-16 text-slate-100 text-4xl justify-center items-center rounded-md my-16'>
              <a href="https://github.com/Tomass97/Tienda-Auriculares-Next" className='p-4' target="_blank">Código</a>
              <img src={githubsvg} alt="github" className='w-8' />
            </button>
            <div className='xl:flex hidden justify-center flex-col xl:flex-row gap-10'>
              <img src={reactsvg} className='w-20' alt="React" />
              <img src={nextsvg} className='w-20' alt="next" />
              <img src={strapisvg} className='w-20' alt="strapi" />
            </div>
          </div>
          <div className='md:p-2 flex items-center'>
            <a href="https://tms-audio.vercel.app/" target="_blank">
              <img className='hover:scale-105 rounded-2xl w-full object-cover transition-all duration-300 shadow-xl shadow-blue-600' src={auriculares} alt="Web-Auriculares" />
            </a>
          </div>
        </div>

        {/*  */}

        <div className='md:p-12 p-6 gap-10 grid grid-cols-2'>
          <div className='md:p-2 flex items-center'>
            <a href="https://cluckinbell.up.railway.app/" target="_blank">
              <img className='hover:scale-105 w-full object-cover rounded-2xl transition-all duration-300 shadow-xl shadow-purple-600' src={cluckinbellimg} alt="Web-Quiosco" />
            </a>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-xl md:text-3xl font-bold item p-4 font-mono color-1 uppercase'>Menú <span className='text-purple-600'>Cluckin Bell</span></h2>
            <button className='bg-gray-900  hidden md:flex font-medium hover:bg-cyan-900 transition-all duration-300 w-64 h-16 text-slate-100 text-4xl justify-center items-center rounded-md my-16'>
              <a href="https://github.com/Tomass97/cluckinbell-app" className='p-4' target="_blank">Código</a>
              <img src={githubsvg} alt="github" className='w-8' />
            </button>
            <div className='xl:flex hidden justify-center flex-col xl:flex-row gap-10'>
              <img src={reactsvg} className='w-20' alt="React" />
              <img src={nextsvg} className='w-20' alt="next" />
              <img src={tailwindsvg} className='w-20' alt="next" />
              <img src={prismasvg} className='w-20' alt="strapi" />
            </div>
          </div>
        </div>

        <div className='md:p-12 p-6 gap-10 grid grid-cols-2'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-xl md:text-3xl font-bold item p-4 font-mono color-1 uppercase'><span className='text-slate-600'>Tesla</span> landing page</h2>
            <button className='bg-gray-900  hidden md:flex font-medium hover:bg-cyan-900 transition-all duration-300 w-64 h-16 text-slate-100 text-4xl justify-center items-center rounded-md my-16'>
              <a href="https://github.com/Tomass97/Tesla-Principal" className='p-4' target="_blank">Código</a>
              <img src={githubsvg} alt="github" className='w-8' />
            </button>
            <div className='xl:flex hidden justify-center flex-col xl:flex-row gap-10'>
              <img src={csssvg} className='w-20' alt="css" />
              <img src={astrosvg} className='w-20' alt="next" />
              <img src={tailwindsvg} className='w-20' alt="strapi" />
            </div>
          </div>
          <div className='md:p-2 flex items-center'>
            <a href="https://tesla-landing-tomas.netlify.app" target="_blank">
              <img className='hover:scale-105 rounded-2xl transition-all w-full object-cover duration-300 shadow-xl shadow-slate-900' src={teslaimg} alt="Web-Tesla" />
            </a>
          </div>
        </div>

        <div className='md:p-12 p-6 gap-10 grid grid-cols-2 '>
          <div className='md:p-2 flex items-center'>
            <a href="https://reservas-tms.netlify.app/" target="_blank">
              <img className='hover:scale-105 rounded-2xl transition-all w-full object-cover duration-300 shadow-xl shadow-green-600' src={reservas} alt="Web-Reservas" />
            </a>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-xl md:text-3xl font-bold item p-4 font-mono color-1 uppercase'>Web reservas <span className='text-green-600'>TMS-EATS</span></h2>
            <button className='bg-gray-900  hidden md:flex font-medium hover:bg-cyan-900 transition-all duration-300 w-64 h-16 text-slate-100 text-4xl  justify-center items-center rounded-md my-16'>
              <a href="https://github.com/Tomass97/reservastms" className='p-4' target="_blank">Código</a>
              <img src={githubsvg} alt="github" className='w-8' />
            </button>
            <div className='xl:flex hidden justify-center flex-col xl:flex-row gap-10'>
              <img src={reactsvg} className='w-20' alt="React" />
              <img src={vitesvg} className='w-20' alt="Vite" />
              <img src={tailwindsvg} className='w-20' alt="next" />
            </div>
          </div>
        </div>

        <div className='md:p-12 p-6 gap-10 grid grid-cols-2'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-xl md:text-3xl font-bold item p-4 font-mono color-1 uppercase'><span className='text-purple-500'>U</span>demy landing page</h2>
            <button className='bg-gray-900  hidden md:flex font-medium hover:bg-cyan-900 transition-all duration-300 w-64 h-16 text-slate-100 text-4xl  justify-center items-center rounded-md my-16'>
              <a href="https://github.com/Tomass97/landing-udemy" className='p-4' target="_blank">Código</a>
              <img src={githubsvg} alt="github" className='w-8' />
            </button>
            <div className='xl:flex hidden justify-center flex-col xl:flex-row gap-10'>
              <img src={csssvg} className='w-20' alt="css" />
              <img src={bootstrapsvg} className='w-20' alt="strapi" />
              <img src={sasssvg} className='w-20' alt="strapi" />
            </div>
          </div>
          <div className='md:p-2 flex items-center'>
            <a href="https://udemy-tms.netlify.app/" target="_blank">
              <img className='hover:scale-105 rounded-2xl w-full object-cover transition-all duration-300 shadow-xl shadow-purple-500' src={udemy} alt="Web-udemy" />
            </a>
          </div>
        </div>

      </section>
    </>
  )
}
