import {useForm} from 'react-hook-form';
import { useAuth } from '../contexto/AuthContext';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registro = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const { registrarse, usuarioAutenticado, errores } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (usuarioAutenticado)
            navigate('/perfil/posts')
    }, [usuarioAutenticado]);

    const onSubmit = handleSubmit(async(values) => {
        registrarse(values);
    });

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
        <div className="bg-blue-600 max-w-md w-full p-10 rounded-lg">
        <h1 className='text-2xl font-bold text-white mb-10'>Registrarse</h1>
            {errores.map((error, i) => (
                <div className='bg-red-600 p-2 text-white' key={i}>{error}</div>
            ))
            }
            <form onSubmit={onSubmit}>
                <label htmlFor="username" className="font-semibold text-white">Nombre de usuario</label>
                <input type="text" {...register("username", { required: true})} placeholder="Nombre de usuario" className='w-full bg-blue-200 text-blue-950 px-4 py-2 rounded-md my-2' />
                {errors.username && <p className='text-medium text-red-600'>Tenés que agregar un nombre de usuario.</p>}

                <label htmlFor="email" className="font-semibold text-white">Email</label>
                <input type="email" {...register("email", { required: true})} placeholder="Email" className='w-full bg-blue-200 text-blue-950 px-4 py-2 rounded-md my-2' />
                {errors.email && <p className='text-medium text-red-600'>Tenés que agregar un email.</p>}

                <label htmlFor="password" className="font-semibold text-white">Contraseña</label>
                <input type="password" {...register("password", { required: true})} placeholder="Contraseña" className='w-full bg-blue-200 text-blue-950 px-4 py-2 rounded-md my-2' />
                {errors.password && <p className='text-medium text-red-600'>Tenés que agregar una contraseña.</p>}

                <button type='submit' className='bg-white text-blue-800 font-bold px-4 py-2 rounded-md mt-10'>Registrarse</button>
            </form>
            <p className="text-white mt-10">¿Ya tenés una cuenta? <Link to="/login" className="text-blue-100 font-semibold">Iniciá sesión.</Link></p>
        </div>
    </div>
  )
}

export default Registro