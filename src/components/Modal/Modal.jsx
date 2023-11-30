import { createPortal } from 'react-dom';
import { Backdrop } from './Modal.styled';
import { useState } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { changeIsNewUser } from '../../redux/auth/authSlice';
import { selectIsNewUser } from '../../redux/auth/selectors';

function Modal({ children, isOpen }) {
  const dispatch = useDispatch();
    const isNewUser = useSelector(selectIsNewUser);

  const [isModal, setIsModal] = useState(true);
  const closeModal = (e) => {
    if (e.target.id === '4') {
      console.log(e.target.id);
      if(isNewUser) setIsModal(false)(dispatch(changeIsNewUser(false)));
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
