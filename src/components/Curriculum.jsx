import htmlsvg from '../../public/html.svg'
import csssvg from '../../public/css.svg'
import javascriptsvg from '../../public/javascript.svg'
import reactsvg from '../../public/react.svg'
import tailwindsvg from '../../public/tailwind.svg'
import sasssvg from '../../public/sass.svg'
import mysqlsvg from '../../public/mysql.svg'
import nextsvg from '../../public/next.svg'
import strapisvg from '../../public/strapi.svg'
import astrosvg from '../../public/astro.svg'
import gitsvg from '../../public/git.svg'
import githubsvg from '../../public/github.svg'
import reactAppsvg from '../../public/create-react-app.svg'
import postresqlsvg from '../../public/postgresql.svg'
import vitesvg from '../../public/vite.svg'
import bootstrapsvg from '../../public/bootstrap.svg'
import prismasvg from '../../public/prisma.svg'








export const Curriculum = () => {
  return (
    <div className='md:bg-slate-200 flex justify-start items-center flex-col min-h-screen p-10'>
      <h1 className='color-1 flex justify-center items-center text-3xl md:text-6xl text-color-1 font-kanit mb-5 p-10'>Mis habilidades</h1>
      <section className='grid grid-cols-3 md:flex md:flex-row justify-center items-center gap-20 mb-20'>
        <div>
          <img src={htmlsvg} alt="imagen html" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>HTML</p>
        </div>
        <div>
          <img src={csssvg} alt="imagen css" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>CSS</p>
        </div>
        <div>
          <img src={javascriptsvg} alt="imagen JS" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>JAVASCRIPT</p>
        </div>
        <div>
          <img src={reactsvg} alt="imagen react" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>REACT</p>
        </div>
      </section>
      <h2 className='color-1 flex justify-center items-center text-3xl font-kanit mb-5'>He realizado proyectos con:</h2>
      <section className='grid grid-cols-3 md:flex-row justify-center items-center gap-20 mb-20'>
      <div>
          <img src={tailwindsvg} alt="imagen css" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>TAILWIND</p>
        </div>
        <div>
          <img src={sasssvg} alt="imagen git" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>SASS</p>
        </div>
        <div>
          <img src={bootstrapsvg} alt="imagen git" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>BOOTSTRAP</p>
        </div>
        <div>
          <img src={astrosvg} alt="imagen git" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>ASTRO</p>
        </div>
        <div>
          <img src={nextsvg} alt="imagen git" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>NEXT</p>
        </div>
        <div>
          <img src={vitesvg} alt="imagen git" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>VITE</p>
        </div>
        <div>
          <img className='flex justify-center' src={reactAppsvg} alt="imagen git" width='100' height='100' />
          <p className='flex justify-center font-black  p-1'>C-R-APP</p>
        </div>

        
        <div>
          <img src={strapisvg} alt="imagen git" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>STRAPI</p>
        </div>
      </section>
      <h3 className='color-1 flex justify-center items-center text-3xl font-kanit mb-5'>Conocimientos básicos:</h3>

      <section className='grid grid-cols-3 md:flex-row justify-center items-center gap-20 mb-10'>
      <div>
          <img src={gitsvg} alt="imagen git" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>GIT</p>
        </div>
        <div>
          <img src={githubsvg} alt="imagen git" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>GITHUB</p>
        </div>
        <div>
          <img src={postresqlsvg} alt="imagen git" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>POSTGRESQL</p>
        </div>
        <div>
          <img src={mysqlsvg} alt="imagen git" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>MYSQL</p>
        </div>
        <div>
          <img src={prismasvg} alt="imagen git" width='100' height='100' />
          <p className='flex justify-center font-black p-1'>PRISMA</p>
        </div>
      </section>
      
      

    </div>
  )
}

export default Curriculum
