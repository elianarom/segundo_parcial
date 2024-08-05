import { BrowserRouter, Route, Routes } from "react-router-dom"
import Registro from "./vistas/Registro"
import Login from "./vistas/Login"
import { AuthProvider } from "./contexto/AuthContext"
import Home from "./vistas/Home"
import PostForm from "./vistas/PostForm"
import PostsUsuario from "./vistas/PostsUsuario"
import RutaProtegida from "./componentes/RutaProtegida"
import { PostProvider } from "./contexto/PostContext"
import Navbar from "./componentes/Navbar"
import Error from "./vistas/Error"

const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
        <main className="container mx-auto px-10">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />

            <Route element={<RutaProtegida />}>
              <Route path="/perfil" element={<PostsUsuario />} />
              <Route path="/perfil/crear-post" element={<PostForm />} />
              <Route path="/perfil/:id" element={<PostForm />} />
            </Route>

            <Route path='*' element={<Error />} />
          </Routes>
          </main>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  )
}

export default App
