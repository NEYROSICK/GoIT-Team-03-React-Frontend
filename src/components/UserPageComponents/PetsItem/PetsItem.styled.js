import styled, { keyframes } from 'styled-components';


export const PetsItemli = styled.li`
  padding: 16px 20px 40px;
  border-radius: 20px;
  background:var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  width: 280px;
  position: relative;
  margin: auto;
  @media only screen and (min-width: 768px) {
    display:flex;
    width: 703px;
    padding: 20px;
    flex-direction: row;
    align-items: flex-start;
    border-radius: 40px;
  }
  @media only screen and (min-width: 1280px) {  
    width: 821px;;
    height: 100%;
    padding: 20px 28px 20px 20px;
  }
  ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media only screen and (min-width: 768px) {
      margin-top: 0;
      gap: 16px;
    }
    @media only screen and (min-width: 1280px) {
      margin-top: 0;
      gap: 12px;
    }
  }
`;

export const PetsCardImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  @media only screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
    margin-right: 20px;
  }
  @media only screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
    margin-right: 32px;
    border-radius: 40px;
  }
`;

export const PetsCardText = styled.li`
  font-size: 14px;
  letter-spacing: 0.56px;

  @media only screen and (min-width: 1280px) {
    font-size:16px;
    letter-spacing: 0.64px;
    line-height: 1.375;
  }
  
  h3 {
    display: inline;
    font-weight: 700;
    font-size: 14px;
    @media only screen and (min-width: 768px) {
      font-weight: 600;
        font-size: 14px;
    }
        @media only screen and (min-width: 1280px) {
        font-size:16px;
    }
  }
  p {
    display: inline;
    word-break: break-all;
    white-space: normal;
    font-weight: 400;
    @media only screen and (min-width: 1280px) {
        font-size:16px;
    }
  }
`

export const PetsCardIcon = styled.svg`
  position: absolute;
  top: 272px;
  right: 16px;
  fill: transparent;
  stroke: #54ADFF;
  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;

export const PetsModalTitle = styled.h3`
  width: 200px;
  margin: 60px auto 14px;
  font-size: 24px;
  font-family: Manrope-Bold, sans-serif;
  font-weight: 700;
  letter-spacing: 0.96px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    width: 288px;
    margin: 60px auto 40px;
    font-size: 28px;
    letter-spacing: -0.28px;
  }
`;

export const PetsModalText = styled.p`
  width: 230px;
  margin: 0 auto 44px;
  text-align: center;
  font-size: 14px;
  font-family: Manrope-Medium, sans-serif;
  font-weight: 500;
  letter-spacing: -0.14px;
  span {
    font-family: Manrope-Bold, sans-serif;
    font-weight: 700;
  }
  @media only screen and (min-width: 768px) {
    width: 393px;
    margin: 0 auto 48px;
    font-size: 16px;
    letter-spacing: -0.16px;
  }
`;

export const PetsModalBtnContainer = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;
const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`;
export const BtnDelite = styled.button`
  position: absolute;
  top: 272px;
  right: 16px;
  
  border: none;
  background-color:transparent;
  padding: 0px;
  @media only screen and (min-width: 768px) {
  top: 20px;
  right: 20px;

  transition: transform 300ms;

  &:hover{
    animation: ${shakeAnimation} 0.5s ease;
  }
  }

`
export const TrashSvg = styled.svg`
  fill:none;
  stroke:var(--clr-brand-blue) ;
  width: 24px;
  height: 24px;

`



