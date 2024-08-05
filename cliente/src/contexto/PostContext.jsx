import { createContext, useContext, useState } from "react";
import { crearPostRequest, getPostsRequest, deletePostRequest, getPostRequest, updatePostRequest } from "../api/posts";

const PostContext = createContext();

export const usePosts = () => {
    const context = useContext(PostContext)
    if(!context) {
        throw new Error("usePosts debe estar dentro del PostProvider")
    }
    return context;
}

export function PostProvider({ children }) {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const res = await getPostsRequest()
            console.log('Respuesta de la API:', res);

            if (Array.isArray(res.data)) {
                setPosts(res.data);
            } else {
                console.error('La respuesta de la API no es un array:', res.data);
                setPosts([]);
            }
        } catch (error) {
            console.error('Error al obtener los posteos:', error);
        }
    }

    const crearPost = async (post) => {
        const res = await crearPostRequest(post)
        console.log(res)
    }

    const eliminarPost = async (id) => {
        try {
            const res = await deletePostRequest(id);
            if(res.status === 204) setPosts(posts.filter((post) => post._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const getPost = async (id) => {
        try {
            const res = await getPostRequest(id)
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }
    
    const editarPost = async (id, post) => {
        try {
            await updatePostRequest(id,post)
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <PostContext.Provider value={{ posts, crearPost, getPosts, eliminarPost, getPost, editarPost }}>
            {children}
        </PostContext.Provider>
    )
}