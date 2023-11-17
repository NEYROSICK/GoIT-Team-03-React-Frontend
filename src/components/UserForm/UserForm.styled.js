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
  gap: 21px;
`;
export const UserFormInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;
`;

export const UserFormList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
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
`;

export const UserFormInput = styled(Field)`
  outline: 0;
  background: none;

  flex: 1 1 auto;

  max-width: 190px;
  height: 28px;
  padding: 4px 12px;
  background: blue;
  background: none;

  border: 1px solid #54adff;
  border-radius: 40px;

  color: #111111;

  font-family: Manrope, sans-serif;
  font-size: 12px;
  letter-spacing: 0.48px;
`;

export const UserFormBtn = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 31px;
  width: 100%;
  padding: 0;
  cursor: pointer;

  border: none;

  background: white;
  color: rgba(136, 136, 136, 1);
  font-size: 18px;
`;

export const Btn = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 248px;
  flex: 1 1 auto;
  text-align: center;
  padding: 8px 12px;

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
`;
export const BtnText = styled.p`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  gap: 10px;

  color: #888;

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
