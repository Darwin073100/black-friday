import { CiWarning } from 'react-icons/ci';
import Logo from '../../assets/logos/hausiva.png';
import Phone from '../../assets/pictures/Phone.jpg';
import Video from '../../assets/videos/Video.mp4';
import { InfoSummary } from '../components/InfoSummary';
import { LiaBusinessTimeSolid } from 'react-icons/lia';
import { IoDocumentsOutline } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';

const Information = () => {
    const infoItems = [
        {
            Icon: CiWarning,
            title: 'Vicios ocultos',
            description: 'Registra y da seguimiento a problemas estructurales sin complicaciones.'
        },
        {
            Icon: LiaBusinessTimeSolid,
            title: 'Reportes de garantías',
            description: 'Informa fallas o desperfectos de tu unidad directamente desde la app.'
        },
        {
            Icon: IoDocumentsOutline,
            title: 'Gestión centralizada',
            description: 'Todo en un solo lugar, con historial y notificaciones en tiempo real.'
        },
        {
            Icon: FaRegCalendarAlt,
            title: 'Reserva de amanidades',
            description: 'Accede y gestiona espacios comunes de manera rápida y sencilla.'
        },
    ];
    return (
        <article className="bg-white w-full">
            <section>
                <h1 className="max-sm:hidden text-center font-bold text-4xl text-gray-700 my-8">¿Cómo funciona?</h1>
                <div className="flex max-sm:flex-col justify-center gap-16 max-sm:gap-8 items-center text-gray-700">
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <img src={Logo} alt="Logo" className='w-[200px]' />
                        </div>
                        <div className='flex flex-col justify-center items-center w-[350px]'>
                            <span className='font-semibold text-4xl max-sm:text-2xl'>Control total,</span>
                            <span className='font-bold text-3xl max-sm:text-2xl'>operación eficiente</span>
                            <p className='text-center max-sm:text-sm'>Optimiza la gestión posventa con una plataforma diseñada para maximizar eficiencia.</p>
                        </div>
                    </div>
                    <div className='max-sm:hidden'>
                        <video src={Video} controls className='w-[450px]'></video>
                    </div>
                </div>
            </section>
            <section className='sm:hidden p-4'>
                <img src={Phone} alt="Phone" className='rounded-2xl' />
            </section>
            <section>
                <h1 className="text-center font-bold text-4xl max-sm:text-2xl text-gray-700 mt-8 mb-12 max-sm:mt-4 max-sm:mb-4">Veneficio para los residentes</h1>
                <div>
                    <div className='grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 justify-center justify-items-center p-4'>
                        {infoItems.map(item=> <>
                            <InfoSummary 
                            {...item} />
                        </>)}
                    </div>
                </div>
            </section>
        </article>
    )
}

export { Information };