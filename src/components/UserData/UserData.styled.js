import styled from 'styled-components';

export const UserPageItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:46px;
    @media screen and (min-width: 375px) {
      max-width: 320px;
  }
    @media screen and (min-width: 768px) {
      max-width: 704px;  
  }
    @media screen and (min-width: 1280px) {
      max-width: 394px;  
  }
`;

export const UserFormTitle = styled.h2`
  display: flex;
  flex-direction: row;

  font-family: Manrope, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;

  color: #000000;
`;

export const UserFormBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 20px 8px;

  background-color: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
      @media screen and (min-width: 768px) {
       padding: 20px ;
       padding-right:76px;
  }
        @media screen and (min-width: 1280px) {
        padding:20px 24px 21px 16px;
  }
`;

export const UserBtnPen = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;

  width: 24px;
  height: 24px;

  background-color: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
        @media screen and (min-width: 768px) {
  top: 18px;
  right: 18px;
  }
`;

export const UserInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserInputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const UserBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Manrope, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  gap: 11px;
  width: 94px;
  padding: 0;
  background-color: transparent;
  border: none;
  margin-bottom: 22px;
  cursor: pointer;
`;

export const UserLabel = styled.label`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;

  cursor: pointer;
`;
/////////////////// modal
export const ModalTitle = styled.h3`
text-align: center;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.96px;



            @media screen and (min-width: 768px) {
    font-size: 36px;
    letter-spacing: 1.44px;

    margin-bottom:52px;
  }
`;
export const ModalText = styled.p`
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.64px;

margin-bottom:40px;

            @media screen and (min-width: 768px) {
              font-size: 24px;
              letter-spacing: 0.94px;

              margin-bottom:60px;
            }
`
export const ModalBtn = styled.button`
display: flex;
width: 248px;
padding: 8px 28px;
justify-content: center;
align-items: center;
margin-left:auto;
margin-right:auto;
gap: 12px;
color: var(--clr-bcg);

border-radius: 40px;
border:none;
background: var(--blue-links, #54ADFF);
`

export const ModalConteiner = styled.div`
    background-color:var(--clr-bcg-user);
    border-radius:20px;
    padding: 68px  16px 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index:5;
            @media screen and (min-width: 768px) {
    padding: 60px  129px 60px;
     width: 608px;
  }
`

export const BtnCloseModal = styled.button`
position:absolute;
top: 16px;
right: 16px;
border: none;
background-color:transparent;
`




