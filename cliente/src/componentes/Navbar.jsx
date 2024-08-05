import { Link } from 'react-router-dom';
import { useAuth } from '../contexto/AuthContext';

const Navbar = () => {
    const {usuarioAutenticado, logout} = useAuth();
    return (
        <>
        <nav>
              <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='relative flex h-16 items-center justify-between'>
                  <ul className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                    <div className='flex space-x-1 items-center mt-2'>
                        <li><Link  className="text-gray-500 font-medium py-2.5 px-6 text-lg transition-all duration-500 hover:text-blue-700" to="/">Home</Link></li>
                        { usuarioAutenticado ? (
                            <>
                                <li><Link className="text-gray-500 font-medium py-2.5 px-6 text-lg transition-all duration-500 hover:text-blue-700" to="/perfil">Perfil</Link></li>
                                <li><Link className="text-gray-500 font-medium py-2.5 px-6 text-lg transition-all duration-500 hover:text-blue-700" to="/perfil/crear-post">Crear posteo</Link></li>
                                <div className='absolute inset-y-0 right-0 flex items-center mt-2'>
                                    <li><Link className="py-2.5 px-6 text-lg rounded-full cursor-pointer font-medium bg-blue-700 text-white hover:bg-blue-950 shadow-xs transition-all duration-500" to="/" onClick={() => {logout()}}>Cerrar Sesión</Link></li>
                                </div>
                            </>
                        ) : (
                            <>
                            <div className='absolute inset-y-0 right-0 flex items-center mt-2'>
                                <li><Link className="relative font-medium px-5 text-gray-500 py-2.5 text-lg transition-all duration-500 hover:text-blue-700" to="/login">Iniciar Sesión</Link></li>
                                <li><Link className="py-2.5 px-6 text-lg rounded-full cursor-pointer font-medium bg-blue-700 text-white hover:bg-blue-950 shadow-xs transition-all duration-500 " to="/registro">Registrarse</Link></li>
                                </div>
                            </>
                        )}
                    </div>
                    
                  </ul>
              </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar