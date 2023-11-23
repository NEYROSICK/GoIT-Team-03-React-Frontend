import styled from 'styled-components';

export const ContainerMainPage = styled.section`
width: 100%;
height: calc(100vh - 128px);

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1280px) {
    position: relative;
    display: flex;
    margin-bottom: 0;
    width: 100%;
  }
`;

export const ImageMainPage = styled.img`
  position: absolute;
  width: 100%;
  left: 0px;

  @media only screen and (min-width: 768px) {
    transform: translateY(-10%);
  }

  @media only screen and (min-width: 1280px) {
    width: auto;
    height: calc(100vh - 70px);
    left: auto;
    right: 0px;
    transform: none;
  }
`;

export const StyledTittle = styled.h1`
  z-index: 20;
  margin-top: 60px;
  font-family: Manrope-Bold;
  font-size: 32px;
  line-height: 1.4;
  color: #000000;
  text-align: left;


  @media only screen and (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 27px;

    width: 588px;
    height: 200px;
    font-size: 68px;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 188px;
    margin-bottom: 248px;

    width: 501px;
    height: 264px;
    font-family: Manrope-ExtraBold;
    line-height: 1.3;
  }
`;
