import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 10px;
`;

export const HeaderStyled = styled.header`
  padding: 10px;
  font-weight: 500;
  
`;

export const Navigation = styled.nav`
  display: flex;
  font-size: 32px;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    flex-direction: row-reverse;
  }
`;



// .container {
//   max-width: 320px;
//   padding-left: 15px;
//   padding-right: 15px;
//   margin-left: auto;
//   margin-right: auto;
// }

// @media screen and (min-width: 768px) {
//   .container {
//     max-width: 768px;
//   }
// }

// @media screen and (min-width: 1280px) {
//   .container {
//     max-width: 1250px;
//   }
// }