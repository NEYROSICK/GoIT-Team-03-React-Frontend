import { createPortal } from 'react-dom';
import { Backdrop } from './Modal.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeIsNewUser } from '../../redux/auth/authSlice';

function Modal({ children, isOpen }) {
  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState(true);

  const closeModal = (e) => {
    if (e.target.id === '4') {
      console.log(e.target.id);
      setIsModal(false)(dispatch(changeIsNewUser(false)));
      if (isOpen) isOpen(false);
    }
    return;
  };

  return (
    isModal &&
    createPortal(
      <Backdrop id="4" onClick={(e) => closeModal(e)}>
        {children}
      </Backdrop>,
      document.getElementById('modal-root'),
    )
  );
}

export default Modal;
