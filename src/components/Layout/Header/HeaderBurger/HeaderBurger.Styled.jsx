import styled from 'styled-components';

export const BurgerButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 1280px) {
    display: none;
  }
  /* padding: 0; */
  /* line-height: 0; */
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

