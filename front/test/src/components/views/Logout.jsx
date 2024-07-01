import {useAuth} from "../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const {logout} = useAuth();
    const handleLogout = () => {
        logout();
        navigate('/');
    }
    return (
        <>
        <li className="relative font-medium px-5 text-gray-500 cursor-pointer py-2.5 text-lg transition-all duration-500 hover:text-blue-700" onClick={handleLogout}>Cerrar Sesión</li>
        </>
    )
}

export default Logout