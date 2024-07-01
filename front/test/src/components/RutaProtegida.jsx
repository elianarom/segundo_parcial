import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const RutaProtegida = ( { element: Component, ...rest } ) => {
    const {autenticado} = useAuth();
    return autenticado ? <Component {...rest} /> : <Navigate to="/login" />
}

export default RutaProtegida