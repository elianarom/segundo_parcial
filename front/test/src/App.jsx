import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/views/Home.jsx';
import Herramientas from './components/views/Herramientas/Herramientas.jsx';
import Panel from './components/views/Panel.jsx';
import Login from './components/views/Login';
import Registrarse from './components/views/Registrarse.jsx';
import Error from './components/views/Error.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';
import DetalleHerramienta from './components/views/Herramientas/DetalleHerramienta.jsx';
import { AutenticacionProvider } from './components/contexts/AuthContext.jsx';
import NavBar from './components/views/NavBar.jsx';
import Footer from './components/views/Footer.jsx';

function App() {
  return (
    <>
    <AutenticacionProvider>
          <BrowserRouter>
            <NavBar/>

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/herramientas' element={<Herramientas />} />
              <Route path='/herramientas/:_id' element={<DetalleHerramienta />}/>
              <Route path='/panel' element={<RutaProtegida element={Panel}  />} />
              <Route path='/login' element={<Login />} />
              <Route path='/registrarse' element={<Registrarse />} />
              <Route path='*' element={<Error />} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </AutenticacionProvider>

    </>
  )
}

export default App
