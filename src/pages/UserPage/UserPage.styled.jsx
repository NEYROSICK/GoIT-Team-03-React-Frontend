import styled from '@emotion/styled';

export const UserPageContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 0px 20px;
      @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0px 32px;
      }
  @media only screen and (min-width: 1280px) {
    display:flex;
    gap:0px 32px; 
    max-width: 1280px;
    padding: 0px 16px;
  }
`;


export const Container = styled.section`
      padding-top:20px ;
        @media only screen and (min-width: 1280px) {
        padding-top:40px ;
        padding-bottom:60px
        }

`;
