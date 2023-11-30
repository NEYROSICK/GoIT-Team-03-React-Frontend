import styled from 'styled-components';
import '../../../index.css';
import { NavLink } from 'react-router-dom';

export const SectionRegister = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 68px);

  @media (min-width: 768px) {
    min-height: calc(100% - 92px);
  }

  @media (min-width: 1280px) {
    min-height: calc(100% - 88px);
  }
`;

export const RegisterForm = styled.form`
  /* margin-left: auto;
  margin-right: auto; */
  margin: 0 auto;
  font-family: Manrope, sans-serif;
  min-height: 420px;
  width: 280px;

  background-color: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 608px;
    padding: 60px 75px;
  }
`;

export const InputValidation = styled.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const ConfirmValidation = styled.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
export const Validation = styled.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
`;
export const ClearButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 10px;
  left: 84%;
  @media (min-width: 768px) {
    top: 10px;
    left: 90%;
  }
`;
export const Input = styled.input`
  display: flex;

  padding-left: 15px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border: solid 1px var(--clr-brand-blue);
  &.is-invalid {
    border-color: var(--clr-brand-red);
  }
`;
export const ConfirmPassword = styled.input`
  display: flex;

  padding-left: 15px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border: solid 1px var(--clr-brand-blue);
  &.is-invalid {
    border-color: var(--clr-brand-red);
  }
`;
export const Button = styled.button`
  font-weight: 600;
  margin-bottom: 8px;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 40px;
  color: var(--clr-bcg-user);

  background-color: var(--clr-brand-blue);
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;
export const Svg = styled.svg`
  stroke: var(--clr-brand-red);
  fill: none;
  width: 24px;
  height: 24px;
`;
export const SvgEye = styled.svg`
  stroke: var(--clr-brand-blue);
  fill: none;
  width: 24px;
  height: 24px;
`;
export const Text = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  text-align: center;
  color: var(--clr-secondary);
`;
export const Link = styled(NavLink)`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
`;
