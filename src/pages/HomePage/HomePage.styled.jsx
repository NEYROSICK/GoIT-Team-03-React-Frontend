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
    position: absolute;
    width: auto;
    height: calc(100vh - 70px);
    left: unset;
    right: 0;
    top: 0;
    bottom: 0;
    //transform: none;
  }
`;

export const StyledTittle = styled.h1`
  z-index: 20;
  margin-top: 60px;
  margin-left: 20px;
  width: 280px;
  font-family: Manrope-Bold, sans-serif ;
  font-size: 32px;
  line-height: 1.4;
  color: #000000;
  text-align: left;


  @media only screen and (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 27px;
    margin-left: 32px;

    width: 588px;
    height: 200px;
    font-size: 68px;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 188px;
    margin-bottom: 248px;
    margin-left: 16px;

    width: 508px;
    height: 264px;
    font-family: Manrope-ExtraBold, sans-serif;
    line-height: 1.3;
  }
`;



// import styled from 'styled-components'

// export const ContainerMainPage = styled.div`
//   position: relative;
//   max-width: 320px;
//   margin: 0 auto;

//   @media only screen and (min-width: 768px) {
//     max-width: 768px;
//   }
//   @media only screen and (min-width: 1280px) {
//     max-width: 1280px;
//   }
// `;

// export const StyledTittle = styled.h1`
//   margin-left: 20px;
//   margin-bottom: 20px;

//   font-size: 32px;
//   font-family: Manrope-Bold, sans-serif;
//   font-weight: 700;
//   line-height: calc(44 / 32);

//   @media only screen and (min-width: 768px) {
//     max-width: 588px;
//     margin-left: 32px;

//     font-size: 68px;
//     line-height: 1.48;
//   }

//   @media only screen and (min-width: 1280px) {
//     position: absolute;
//     max-width: 500px;
//     top: 25%;
//     margin-left: 16px;

//     font-family: Manrope-ExtraBold, sans-serif;
//     font-weight: 800;

//     line-height: 1.3;
//   }
// `;

// export const ImageMainPage = styled.img`
// position: absolute;
//  width: 100%;
// left: 0px;

// @media only screen and (min-width: 768px) {
//    transform: translateY(-10%);
//      }
  
//  @media only screen and (min-width: 1280px) {
//     width: auto;
//     height: calc(100vh - 70px);
//     left: auto;
//     right: 0px;
//     transform: none;
//  }
// `;