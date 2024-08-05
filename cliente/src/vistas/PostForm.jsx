import { useForm } from "react-hook-form"
import { usePosts } from "../contexto/PostContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


const PostForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { crearPost, getPost, editarPost} = usePosts();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadPost() {
      if(params.id) {
        const post = await getPost(params.id)
        console.log(post)
        setValue('title', post.title)
        setValue('description', post.description)
      }
    }
    loadPost();
  }, [])

  const onSubmit = handleSubmit((data) => {
    if(params.id) {
      editarPost(params.id, data)
    } else {
      crearPost(data);
    }
    navigate('/perfil')
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className="border border-blue-700 max-w-md w-full p-10 rounded-lg">
        <form onSubmit={onSubmit}>
        <label htmlFor="title" className="font-semibold text-blue-600">Título</label>
        <input type="text" placeholder="Título" {...register("title")} className='w-full bg-blue-200 text-blue-950 px-4 py-2 rounded-md my-2' />

        <label htmlFor="description" className="font-semibold text-blue-600">Descripción</label>
        <textarea rows="3" placeholder="Descripción" {...register("description")} className='w-full bg-blue-200 text-blue-950 px-4 py-2 rounded-md my-2'></textarea>

        <button className="py-1 px-3 text-lg rounded-full cursor-pointer font-medium bg-blue-600 text-white hover:bg-blue-800 shadow-xs transition-all duration-500">Guardar</button>
        </form>
      </div>
    </div>
  )
}

export default PostForm