import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, registroRequest, verificarToken } from '../api/auth';
import Cookies from 'js-cookie'

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error("useAuth debe estar dentro del AuthProvider")
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);
    const [errores, setErrores] = useState([]);
    const [loading, setLoading] = useState(true)

    const registrarse = async (usuario) => {
        try {
            const res = await registroRequest(usuario)
            console.log(res.data)
            setUsuario(res.data)
            setUsuarioAutenticado(true);
        } catch (error) {
            console.log(error.response)
            setErrores(error.response.data)
        }
    };

    const login = async (usuario) => {
        try {
            const res = await loginRequest(usuario)
            console.log(res)
            setUsuarioAutenticado(true)
            setUsuario(res.data)
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrores(error.response.data)
            }
            setErrores([error.response.data.message])
        }
    }

    const logout = () => {
        Cookies.remove("token");
        setUsuarioAutenticado(false);
        setUsuario(null);
    }

    useEffect(() => {
        if(errores.length > 0) {
            const timer = setTimeout(() => {
                setErrores([])
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [errores])

    useEffect(() => {
        async function revisarLogin() {
            const cookies = Cookies.get()

            if(!cookies.token) {
                setUsuarioAutenticado(false);
                setLoading(false)
                setUsuario(null)
                return;
            }

            try {
                const res = await verificarToken(cookies.token)
                if(!res.data) {
                    setUsuarioAutenticado(false)
                    setLoading(false)
                    return
                }
                
                setUsuarioAutenticado(true)
                setUsuario(res.data)
                setLoading(false)
            } catch (error) {
                setUsuarioAutenticado(false)
                setUsuario(null)
                setLoading(false)
            }
        }
        revisarLogin()
    }, [])

    return (
        <AuthContext.Provider value={{ registrarse, usuario, usuarioAutenticado, errores, login, loading,logout }}>
            {children}
        </AuthContext.Provider>
    )
}