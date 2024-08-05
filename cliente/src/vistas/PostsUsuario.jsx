import { useEffect, useState } from "react";
import { usePosts } from "../contexto/PostContext"
import PostCard from "../componentes/PostCard";

const PostsUsuario = () => {
  const { getPosts, posts} = usePosts();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true);
        try {
            await getPosts();
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };
    fetchPosts();
  }, []);

  if (loading) return <h1>Cargando...</h1>;

  if (!Array.isArray(posts)) return <h1>Hubo un error con los posteos.</h1>;
  if (posts.length === 0) return (<h1>No tenés posteos publicados.</h1>);

  return (
    <div className="grid grid-cols-3 gap-2 mt-20">
    {
      posts.map(post => (
            <PostCard post={post} key={post._id} />
      ))
    }
    </div>
  )
}

export default PostsUsuario