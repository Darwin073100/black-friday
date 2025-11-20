import BoxPicture from '../../assets/pictures/box.jpg';
import '../../styles/HeaderPromotion.css';
import { Button } from './Button';

const HeaderPromotion = () => {
    return (
        <div className='header-promotion text-white font-bold uppercase'>
            <div className='header-promotion-title'>
                <div className='flex flex-col items-center justify-center w-1/2 gap-2'>
                    <div className='text-8xl max-sm:text-7xl max-md:text-8xl flex items-end bold'>
                        <span>35</span>
                        <div className='flex flex-col text-3xl max-sm:text-lg'>
                            <span>%</span>
                            <span>OFF</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-3xl max-sm:text-lg max-md:text-2xl'>En nuestra</span>
                        <span className='text-3xl max-sm:text-lg max-md:text-2xl'>plataforma posventa</span>
                    </div>
                    <Button className='bg-yellow-500 max-md:hidden shadow-lg shadow-amber-300 hover:bg-yellow-300 transition duration-300'>
                        Obtener 35% off
                    </Button>
                </div>
            </div>
            <div className='header-picture-container'>
                <img src={BoxPicture} alt="Regalos" className='header-picture' />
            </div>
        </div>
    )
}

export { HeaderPromotion };
