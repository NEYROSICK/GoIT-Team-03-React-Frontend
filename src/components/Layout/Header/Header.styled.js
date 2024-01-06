import styled from 'styled-components';

export const HeaderSection = styled.header`
  position: relative;
  z-index: 100;
  /* background-color: var(--clr-bcg); */

  @media (min-width: 1280px) {
    background-color: transparent;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  font-weight: 500;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  font-size: 32px;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    flex-direction: row;
    margin-right: 24px;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    margin-right: 0;
    flex-direction: row-reverse;
    margin-left: 159px;
    justify-content: space-between;
  }
`;
