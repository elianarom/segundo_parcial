import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexto/AuthContext"


const RutaProtegida = () => {
    const { loading, usuarioAutenticado } = useAuth();

    if(loading) return <h1>Cargando...</h1>;
    if(!loading && !usuarioAutenticado) return <Navigate to="/login" replace />

  return (
    <Outlet />
  )
}

export default RutaProtegida