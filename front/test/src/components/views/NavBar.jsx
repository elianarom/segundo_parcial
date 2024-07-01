import logo from '../../assets/img/logo-hefe.svg'
import Logout from './Logout.jsx';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const NavBar = () => {
    const {autenticado} = useAuth();
    return (
        <>
        <nav>
              <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='relative flex h-16 items-center justify-between'>
                  <ul className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                    <div className='flex flex-shrink-0 items-center'>
                      <img className="h-7 w-auto mr-8" src={logo} alt="logo hefe" />
                    </div>
                    <div className='flex space-x-1 items-center mt-2'>
                        <li><Link  className="text-gray-500 font-medium py-2.5 px-6 text-lg transition-all duration-500 hover:text-blue-700" to="/">Home</Link></li>
                        <li><Link className="text-gray-500 font-medium py-2.5 px-6 text-lg transition-all duration-500 hover:text-blue-700" to="/herramientas">Herramientas</Link></li>
                        <li><Link className="text-gray-500 font-medium py-2.5 px-6 text-lg transition-all duration-500 hover:text-blue-700" to="/panel">Panel de control</Link></li>
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center mt-2'>
                        <li>
                            {autenticado
                            ? <Logout />
                            : <Link className="relative font-medium px-5 text-gray-500 py-2.5 text-lg transition-all duration-500 hover:text-blue-700" to="/login">Iniciar Sesión</Link>
                            }
                        </li>
                         <li><Link className="py-2.5 px-6 text-lg rounded-full cursor-pointer font-medium bg-blue-700 text-white hover:bg-blue-950 shadow-xs transition-all duration-500 " to="/registrarse">Registrarse</Link></li>
                    </div>
                  </ul>
              </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar