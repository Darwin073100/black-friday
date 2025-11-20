import type React from "react";
import '../../styles/Modal.css';

interface Props {
    children: React.ReactNode,
}
const Modal = ({ children }: Props) => {
  return (
    <>
        <div className="modal" >
            {children}
        </div>
    </>
  )
}

export default Modal
