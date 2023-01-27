import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <Backdrop>
      <ModalContent>{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
};
