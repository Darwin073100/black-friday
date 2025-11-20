import { FaCircle } from "react-icons/fa";
import UserPicture from'../../assets/pictures/user.jpg';
import { Button } from "./Button";
import { ArrangementOption } from "./ArrangementOption";
import Video from '../../assets/videos/Video.mp4';
import { useArrangement } from "../../hooks/useArrangement";

const Arrangement = () => {
    const { response } = useArrangement();
    console.log(response);
    return (
        <article className="bg-blue-950 text-white flex flex-col pb-8">
            <Button className='my-7 bg-yellow-500 md:hidden shadow-sm shadow-amber-300 hover:bg-yellow-300 transition duration-300'>
                Obtener 35% off
            </Button>
            <section className="flex justify-center p-8 max-sm:p-4 text-5xl max-sm:text-lg">
                <h2>Optimiza tu <strong className="font-bold">gestión posventa</strong> desde hoy</h2>
            </section>
            <section className="flex max-sm:flex-col sm:justify-around items-center">
                <div className="w-[390px] flex flex-col justify-center items-center max-sm:mb-4">
                    <p className="max-sm:text-center">
                        Únete al grupo exclusivo de <strong className="font-bold">usuarios beta</strong>. Accede primero a nuevas funciones y
                        comparte tus comentarios para ayudarnos a perfeccionar la experiencia.
                    </p>
                    <ul className="flex my-8 gap-6 max-sm:hidden">
                        <li className="flex gap-2 items-center">
                            <FaCircle className="text-yellow-500 w-2" />Sin instalación compleja
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaCircle className="text-yellow-500 w-2" />Descuento automático
                        </li>
                    </ul>
                    <Button className='my-7 max-sm:hidden bg-yellow-500 shadow-sm shadow-amber-300 hover:bg-yellow-300 transition duration-300'>
                        Obtener 35% off
                    </Button>
                </div>
                <img className="w-[373px] rounded-2xl" src={UserPicture} alt="user"  />
                <div className="sm:hidden flex flex-col justify-center items-center">
                    <ul className="flex mt-4 gap-6 max-sm:text-sm">
                        <li className="flex gap-2 items-center">
                            <FaCircle className="text-yellow-500 w-2" />Sin instalación compleja
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaCircle className="text-yellow-500 w-2" />Descuento automático
                        </li>
                    </ul>
                    <Button className='my-8 bg-yellow-500 shadow-sm shadow-amber-300 hover:bg-yellow-300 transition duration-300'>
                        Obtener 35% off
                    </Button>
                </div>
            </section>
            <section className="mt-2 w-full grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2 justify-items-center justify-center items-center">
                <ArrangementOption
                    title="Semestral"
                    description="Los primeros 6 meses del servicio ahorras un 15%" 
                    btnText="Saber más"/>
                <ArrangementOption
                    title="Semestral"
                    description="Los primeros 6 meses del servicio ahorras un 15%" 
                    btnText="Saber más"/>
                <ArrangementOption
                    title="Semestral"
                    description="Los primeros 6 meses del servicio ahorras un 15%" 
                    btnText="Saber más"
                    important/>
            </section>
            <section className="m-4 bg-white rounded-2xl px-4 py-2 sm:hidden">
                <h1 className="text-center font-bold text-xl text-gray-700">¿Cómo funciona?</h1>
                <div className="flex max-sm:flex-col justify-center gap-16 max-sm:gap-8 items-center text-gray-700">
                    <div>
                        <video src={Video} controls className='w-[450px] p-4'></video>
                    </div>
                </div>
            </section>
        </article>
    )
}

export { Arrangement };