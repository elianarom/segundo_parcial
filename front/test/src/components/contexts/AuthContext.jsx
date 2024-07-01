import { createContext, useContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export const AutenticacionProvider = ( {children} ) => {
    const [autenticado, setAutenticado] = useState(false);

    useEffect( () => {
        const token = localStorage.getItem('jwt');
        if( token ) {
            console.log('Estás logueado.');
            setAutenticado(true);
        } else {
            console.log('No estás logueado.');
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('jwt', token);
        setAutenticado(true);
    }

    const logout = () => {
        localStorage.removeItem('jwt')
        setAutenticado(false);
    }

    return (
        <AuthContext.Provider value={{autenticado, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}