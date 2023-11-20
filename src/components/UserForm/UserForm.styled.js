import styled from 'styled-components';
import { Form, Field } from 'formik';

export const UserImgBox = styled.div`
  margin-bottom: 32px;
  position: relative;
  img {
    width: 140px;
    height: 135px;
    object-fit: cover;
    display: block;
    margin: auto;
    border-radius: 20%;
    max-width: 100%;
  }
`;

export const UserImgInputBody = styled.div`
  position: relative;
`;

export const UserImgInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const UserFormBody = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
      @media screen and (min-width: 768px) {
      flex-direction:row-reverse;
              @media screen and (max-width: 1280px) {
     gap: 70px;
  }
  }
        @media screen and (min-width: 1280px) {
        flex-direction: column;
  }
`;
export const UserFormInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;
        @media screen and (min-width: 768px) {
  gap: 15px 0px;
  }
`;

export const UserFormList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
         @media screen and (min-width: 768px) {
      width: 354px;
  }
`;

export const UserFormItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UserFormLabel = styled.label`
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.56px;
  color: #111111;
        @media screen and (min-width: 768px) {
  font-size: 18px;
  letter-spacing: 0.72px;
  }
`;

export const UserFormInput = styled(Field)`
  outline: 0;
  background: none;

  flex: 1 1 auto;

  max-width: 190px;
  height: 28px;
  padding: 4px 12px;
  background: var(--clr-brand-blue);
  background: none;

  border: 1px solid var(--clr-brand-blue);
  border-radius: 40px;

  color: #111111;

  font-family: Manrope, sans-serif;
  font-size: 12px;
  letter-spacing: 0.48px;

          @media screen and (min-width: 768px) {
       max-width: 255px;
  }
`;

export const UserFormBtn = styled.button`
  align-items: center;
  display: flex;
  justify-content:center;
background-color:transparent;
  height: 31px;
  cursor: pointer;

  border: none;

  font-size: 18px;
            @media screen and (min-width: 768px) {
        justify-content:flex-end;
  
  }

`;

export const Btn = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 248px;
  flex: 1 1 auto;
  text-align: center;
  padding: 8px 12px;
  box-sizing:border-box;

  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.7);

  color: #fef9f9;
  background-color: #54adff;

  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.56px;

  transition: all 250ms ease-in-out;

  cursor: pointer;
          @media screen and (min-width: 768px) {
       max-width: 255px;
  }
`;
export const BtnText = styled.p`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  gap: 10px;

  color: var(--clr-secondary);

  padding: 10px;

  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.64px;
`;
export const UserFormSvg = styled.svg`
  width: 24px;
  height: 24px;

  stroke: #54adff;
`;

// modal 
export const ModalConteiner = styled.div`
    background-color:var(--clr-bcg-user);
    border-radius:20px;
    padding: 70px  12px 60px;
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index:5;
            @media screen and (min-width: 768px) {
    padding: 108px  155px 109px;
     width: 608px;
  }
`
export const ModalTitle = styled.h3`
text-align: center;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.96px;

    margin-bottom:44px;

            @media screen and (min-width: 768px) {
    font-size: 36px;
    letter-spacing: 1.44px;

    margin-bottom:48px;
  }
`;

export const BtnCloseModal = styled.button`
  position:absolute;
  top: 12px;
  right: 12px;
  border: none;
  background-color:transparent;
  @media screen and (min-width: 768px) {
  top: 24px;
  right: 24px;
  }
`
export const ConteinerBtn = styled.div`
  display: flex;
  flex-direction:column;
  gap:8px 0px ;
  @media screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:center;
    gap: 0px  17px;
  }
`

export const ButtonCansel = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;


  background-color:transparent;
  color:var(--clr-brand-blue);
  border:   2px solid var(--clr-brand-blue);
  border-radius: 40px;
  padding: 8px 20px;
  @media screen and (min-width: 768px) {
    width: 129px;
    height: 40px;
  }
`

export const ButtonLogout = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  display: flex;
  justify-content: center;
  align-items:center;
  gap:0px 8px;


  background-color:var(--clr-brand-blue);
  color:var(--clr-primary-inv);
  border: none;
  border-radius: 40px;
  padding: 8px 20px;

  @media screen and (min-width: 768px) {
    width: 129px;
    height: 40px;
  }
`


