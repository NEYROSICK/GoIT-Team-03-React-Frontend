import styled from "styled-components";

export const PetsDataTitle = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

`

export const PetsList = styled.ul`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column; 
  gap: 20px;
  @media only screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const PetsCardContainer = styled.li`
  padding: 16px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background:var(--clr-bcg-user);
 box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  width: 280px;
  position: relative;
  @media only screen and (min-width: 768px) {
    width: 703px;
    height: 256px;
    padding: 20px 20px 0 20px;
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
    font-family: Manrope-Bold, sans-serif;
    font-weight: 700;
    @media only screen and (min-width: 768px) {
      font-family: Manrope-SemiBold, sans-serif;
      font-weight: 600;
    }
  }
  p {
    display: inline;
    font-family: Manrope-Regular, sans-serif;
    font-weight: 400;
    @media only screen and (min-width: 768px) {
      font-family: Manrope-Regular, sans-serif;
      font-weight: 400;
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
  }

`

//Add pet
export const ConteinerTitle = styled.div`
  display: flex;
  margin-bottom: 31px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

`
export const BtnAddPet = styled.button`
  border-radius: 50%;
  padding: 20px 18px 16px;
  color: var(--clr-primary-inv);
  background:  var(--clr-brand-blue-grd);
  margin-left:auto;
  font-size: 12px;

  /* z-index: 44px; */

  border: none;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  gap: 4px 0px ;


  position: fixed;
  bottom:30px;
  right: 20px;
  z-index:1;
  @media only screen and (min-width: 768px) {
    position: static;
    
    flex-direction:row-reverse;
    padding: 8px 20px;
    gap: 0px 8px ;
    border-radius:40px;
    
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.64px;
  }

`

