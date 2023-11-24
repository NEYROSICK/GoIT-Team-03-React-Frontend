import styled from 'styled-components';

export const HeaderSection = styled.header`
  padding: 10px;
  font-weight: 500;
  
`;

export const Navigation = styled.nav`
  display: flex;
  font-size: 32px;
  justify-content: flex-end;
  align-items: center;
  // height: 100vh;
  flex-direction: column;
  text-align: center;

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

export const MobileContainer = styled.div`
  display: flex;
  margin-right: 24px;
`;

