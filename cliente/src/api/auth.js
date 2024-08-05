import axios from './axios';

export const registroRequest = usuario => axios.post('/usuarios', usuario);
export const loginRequest = usuario => axios.post('/usuarios/login', usuario);
export const verificarToken = () => axios.get('/usuarios/verificar');