import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Curriculum } from '../components/Curriculum'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contacto } from '../components/Contacto'
import ReactGA from 'react-ga'


const MisRutas = () => {



  return (
    <BrowserRouter>
      <Header />
      <section className='content'>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Inicio' element={<Inicio />} />
          <Route path='/Portafolio' element={<Portafolio />} />
          <Route path='/Curriculum' element={<Curriculum />} />
          <Route path='/Contacto' element={<Contacto />} />
        </Routes>
      </section>

      <Footer />
    </BrowserRouter>
  )
}

export default MisRutas