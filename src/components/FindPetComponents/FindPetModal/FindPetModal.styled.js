import styled from '@emotion/styled';

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1);
  padding: 15px;

  z-index: 1000;

  opacity: ${(props) => {
    return props.showModal ? '1' : '0';
  }};

  transition: 300ms;
`;

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  scale: ${(props) => {
    return props.showModal ? '1' : '0';
  }};

  transition: 300ms;
`;

export { Backdrop, ModalContainer };
