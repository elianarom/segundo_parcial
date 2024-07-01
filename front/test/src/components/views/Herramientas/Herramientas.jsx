import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imagen from '../../../assets/img/llave.jpg';

const Herramientas = () => {
    const [herramienta, setHerramienta] = useState([]);

    useEffect( () => {
        const getHerramienta = async () => {
            const endPoint = 'http://localhost:3000/herramientas';
            const res = await fetch(endPoint);
            const json = await res.json();
            setHerramienta(json.data);

            console.log(json)
        }
        getHerramienta();
    }, [])
    return (
        <>
        <section className="relative mx-auto mt-10 mb-32 w-full max-w-container px-4 sm:px-6 lg:px-32">
            <div className="grid max-w-2xl grid-cols-3 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10">
            {
                herramienta.map( h => (
                <div className="mx-3 mt-6 pb-5 flex flex-col rounded-lg border border-black bg-white text-black sm:shrink-0 sm:grow sm:basis-0" key={h._id}>
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <Link to={`/herramientas/${h._id}`}>
                            <img className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src={imagen} alt="imagen" />
                        </Link>
                    </div>
                    <div className="p-4" >
                        <h1 className="text-lg font-semibold text-gray-900 mb-2 mt-5 transition-all duration-500">{h.name}</h1>
                        <p className="text-2xl font-bold text-blue-800 mb-5">${h.price}</p>
                        <Link to={`/herramientas/${h._id}`} className="items-center py-2.5 px-6 rounded-full bg-blue-700 text-white text-sm lg:text-base font-bold hover:bg-blue-800 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Ver detalle</Link>
                    </div>
                </div>
                ))
            }
                
            </div>
        </section>
        </>
    )
}

export default Herramientas