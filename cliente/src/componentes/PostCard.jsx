import { Link } from "react-router-dom"
import { usePosts } from "../contexto/PostContext"


const PostCard = ({post}) => {
    const {eliminarPost} = usePosts()
  return (
    <div className="border border-blue-700 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold text-blue-900">{post.title}</h1>
        <p className="text-gray-600">{post.description}</p>
        <div className="flex gap-x-2 items-center mt-10">
            <Link to={`/perfil/${post._id}`} className="py-1 px-3 text-lg rounded-full cursor-pointer font-medium bg-lime-600 text-white hover:bg-green-800 shadow-xs transition-all duration-500">Editar</Link>
            <button onClick={() => {eliminarPost(post._id)}} className="py-1 px-3 text-lg rounded-full cursor-pointer font-medium bg-red-700 text-white hover:bg-red-900 shadow-xs transition-all duration-500">Eliminar</button>
        </div>
    </div>
  )
}

export default PostCard