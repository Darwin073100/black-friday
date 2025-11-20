import Modal from '../containers/Modal';
import BoxesPicture from '../../assets/pictures/boxes.jpg';
import '../../styles/FloatingPromotion.css';
import { CgClose } from 'react-icons/cg';

interface Props {
  onClose?: () => void;
}

const FloatingPromotion = ({ onClose }: Props) => {
  return (
    <Modal>
      <div className='floating-promotion'>
        <button onClick={onClose} className='floating-promotion-button bg-white text-black w-[35px] h-[35px] rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-all duration-300'>
          <CgClose />
        </button>
        <div className='floating-promotion-title text-white text-5xl max-sm:text-2xl max-md:text-4xl font-bold uppercase'>
          <span>¡Llegó el</span>
          <span>Black FRIDAY!</span>
        </div>
        <div className='picture-container'>
          <img src={BoxesPicture} alt="Regalos" className='picture rounded-4xl' />
        </div>
      </div>
    </Modal>
  )
}

export { FloatingPromotion };
