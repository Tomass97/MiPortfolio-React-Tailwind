import React from 'react';
import telegramLogo from '../../public/telegram.svg'
import linkedinLogo from '../../public/linkedin.svg'


export function Contacto() {
  return (
    <section className='min-h-screen md:bg-slate-200 p-1'>
      <h1 className='color-1 text-center flex justify-center items-center text-6xl text-color-1 font-kanit mb-5 p-10'>¡Ponte en contacto conmigo!</h1>
      <div className="flex justify-center p-1 md-flex-row text-center gap-3">
        <div className="rounded-md bg-blue-100 text-blue-800 py-3 px-8 text-base font-semibold  hover:bg-blue-200 transition-all duration-300">
          <a
            href="https://www.linkedin.com/in/tomas-preduna-4b3630271/"
            target='_blank'

          >
            <img className='w-16 h-auto' src={linkedinLogo} alt="linkedin img" />
            <div className='uppercase font-bold'>Linkedin</div>
          </a>
        </div>
        <div className="rounded-md bg-blue-100 text-blue-800 py-3 px-8 text-base font-semibold hover:bg-blue-200 transition-all duration-300">
        <a
          href="https://t.me/Matomaster97"
          target='_blank'
        >
          <img className='w-16 h-auto' src={telegramLogo} alt="telegram img" />
          <div className='uppercase font-bold'>Telegram</div>
        </a>
        </div>
      </div>
      <div className="md:p-5 p-10 my-10 mx-auto w-full max-w-[550px] max-h-[700px]">
        <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' action="https://formsubmit.co/tomasrlnd97@gmail.com" method="POST">
          <div className="mb-5">
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-color-1 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="asunto"
              id="asunto"
              placeholder="Asunto"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-color-1 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <textarea
              rows="4"
              name="mensaje"
              id="mensaje"
              placeholder="Contactame!!"
              className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-800 placeholder-color-1 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-color-1 py-3 px-8 text-base font-semibold text-white focus:outline-none hover:bg-blue-600 mt-4 transition-all duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
