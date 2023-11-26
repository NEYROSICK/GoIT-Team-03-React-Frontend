import styled from 'styled-components';

export const HeaderSection = styled.header`
  display: flex;
  padding: 20px 0;
  font-weight: 500;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: center;
    /* margin-right: 24px; */
  }
`;

export const Navigation = styled.nav`
  display: flex;
  font-size: 32px;
  justify-content: flex-end;
  align-items: center;
  // height: 100vh;
  /* flex-direction: column; */
  text-align: center;
  width:100%;

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

