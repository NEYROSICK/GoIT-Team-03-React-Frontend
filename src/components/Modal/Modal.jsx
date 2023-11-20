import { createPortal } from 'react-dom';
import { Backdrop } from './Modal.styled'
import { useState } from 'react';


function Modal({ children }) {

    const [isModal, setIsModal] = useState(true);

    const closeModal = (e) => {
        if (e.target.id === '4') {
            console.log(e.target.id)
            setIsModal(false)
        } 
    return
    }
    return (
        isModal && 
        createPortal(
            <Backdrop  id="4" onClick={(e) => closeModal(e)}> 
                {children}
            </Backdrop>,
            document.getElementById('modal-root')
        )
      
  )
    
}

export default Modal
