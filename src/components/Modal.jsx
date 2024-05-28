import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
      <div className='modal-card' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </Backdrop>
  );
};

export default Modal;
