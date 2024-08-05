import axios from './axios';

export const getPostsRequest = () => axios.get('/posts/perfil');
export const getPostRequest = (id) => axios.get(`/posts/perfil/${id}`);
export const crearPostRequest = (post) => axios.post('/posts/perfil', post);
export const updatePostRequest = (id, post) => axios.put(`/posts/perfil/${id}`, post);
export const deletePostRequest = (id) => axios.delete(`/posts/perfil/${id}`);