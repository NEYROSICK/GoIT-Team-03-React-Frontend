import styled from 'styled-components';

export const BurgerButton = styled.button`
  width: 24px;
  height: 68px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const BurgerIcon = styled.svg`
  stroke: var(--clr-brand-yellow);
  width: 24px;
  height: 24px;
`;

export const ModalMenu = styled.div`
  display: flex;
`;

export const Modal = styled.div`
  display: flex;
`;
