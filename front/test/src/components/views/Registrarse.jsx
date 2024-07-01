import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Registrarse = () => {
    const navigate = useNavigate();
    const [ formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name, email, password);

        try {
            const endPoint = 'http://localhost:3000/usuarios';
            const res = await fetch(endPoint,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( formData  )
            });

            const json = await res.json();
            
            if(json) {
                console.log('Usuario registrado con éxito, podés iniciar sesión ahora.')
                navigate('/login')
            } else {
                console.log('Error en el formulario completado, revisá tus datos y probá nuevamente.')
            }            
            console.log(json);

        } catch (error) {
            console.error(error)
        }


    }

    return (
        <>
         <section>
                <div className='isolate bg-white px-6 py-24 sm:py-32 lg:px-12 text-center'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Registrate</h1>
                    <p className='mt-2 text-lg leading-8 text-gray-600'>Completá con tus datos para poder acceder al panel de control.</p>

                    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xs sm:mt-20" >
                        <div className='relative'>
                            <label htmlFor="name" className='flex items-center mb-2 text-gray-600 text-sm font-medium'>Nombre</label>
                                <input 
                                value={formData.name}
                                onChange={handleChange}
                                type="text" 
                                name='name' 
                                id='name' 
                                className='block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed'
                                />
                        </div>

                        <div className='relative'>
                            <label htmlFor="email" className='flex  items-center mb-2 text-gray-600 text-sm font-medium'>Email</label>
                                <input 
                                value={formData.email}
                                onChange={handleChange}
                                type="email" 
                                name='email' 
                                id='email' 
                                className='block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed'
                                />
                        </div>

                        <div className='relative'>
                            <label htmlFor="password" className='flex  items-center mb-2 text-gray-600 text-sm font-medium'>Contraseña</label>
                                <input 
                                    value={formData.password}
                                    onChange={handleChange}
                                    type="password"
                                    name='password' 
                                    id='password' 
                                    className='block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed'
                                />
                        </div>

                        <div className="mb-8 inline-flex gap-2 mt-10">
                            <button type="submit"
                                className="flex items-center justify-between py-2.5 px-6 rounded-full bg-blue-700 text-white text-sm lg:text-base font-bold hover:bg-blue-800 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Registrarme
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
        
    )
}

export default Registrarse