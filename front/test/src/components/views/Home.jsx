import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 ">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-blue-950 sm:text-6xl animate-fadeIn">Buscá, alquilá, usala y devolvela.</h1>
                            <p className="mt-6 text-lg leading-8 text-gray-500">Te ayudamos a encontrar esa herramienta que necesitás
                            en nuestro sitio. Pero también te ayudamos a que ayudes a otros.</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link to="/login" className="py-2.5 px-6 text-lg rounded-full cursor-pointer font-medium bg-blue-700 text-white hover:text-blue-950 hover:bg-gray-200 shadow-xs transition-all duration-500">Quiero alquilar</Link>
                            <Link to="/login"a href="#" className="py-2.5 px-6 text-lg rounded-full cursor-pointer font-medium bg-blue-950 text-white hover:text-blue-950 hover:bg-gray-200 shadow-xs transition-all duration-500">Quiero publicar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home