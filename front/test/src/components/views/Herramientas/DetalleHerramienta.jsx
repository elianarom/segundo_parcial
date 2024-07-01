import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import imagen from '../../../assets/img/llave.jpg';

const DetalleHerramienta = () => {
    const {_id} = useParams();
    const [herramienta, setHerramienta] = useState(null);

    useEffect( () => {
        const getHerramienta = async () => {
            const endPoint = `http://localhost:3000/herramientas/${_id}`;
            const res = await fetch(endPoint);
            const json = await res.json();
            console.log(json)

            setHerramienta(json);
        }
        getHerramienta();
    }, [_id])


    return (
        <>
        <section>
            <div className="isolate px-6 py-24 sm:py-32 lg:px-12">
                <div className="mx-auto mt-5 max-w-3xl sm:mt-5">
                    <div className="items-center flex flex-col rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark md:max-w-xl md:flex-row">
                        <img className="h-60 w-full rounded-t-lg object-cover md:h-30 md:w-33 md:!rounded-none md:!rounded-s-lg"
                        src={imagen} alt="" />
                        <div className="flex flex-col justify-start p-6">
                            <h1 className="mb-4 text-3xl font-bold">{herramienta?.name}</h1>
                            <p className="text-xs text-surface/75 text-blue-700">@{herramienta?.usuario}</p>
                            <p className="mb-4 mt-5 text-base">{herramienta?.description}
                            </p>
                            <p className="font-bold text-blue-950 text-xl">$ {herramienta?.price}</p>
                            <div className="mb-3 mt-10">
                                <Link to="/registrarse" className="items-center justify-between py-2.5 px-6 rounded-full bg-blue-700 text-white text-sm lg:text-base font-bold hover:bg-blue-800 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Alquilar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
        </>
    )
}

export default DetalleHerramienta