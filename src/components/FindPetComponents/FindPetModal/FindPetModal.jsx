import { useEffect, useMemo } from 'react';
// Component
import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './FindPetModal.styled';

const modalRoot = document.querySelector('#modal-root');

const FindPetModal = ({ onClose, children }) => {
  const handleKeydown = useMemo(
    () => (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    },

    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeydown]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>{children}</ModalContainer>
    </Backdrop>,
    modalRoot,
  );
};

export default FindPetModal;
