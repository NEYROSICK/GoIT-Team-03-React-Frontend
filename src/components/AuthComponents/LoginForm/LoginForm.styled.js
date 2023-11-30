import styled from 'styled-components';
import '../../../index.css';
import { NavLink } from 'react-router-dom';

export const SectionLogin = styled.section`
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

export const Form = styled.form`
  margin: 0 auto;
  font-family: Manrope, sans-serif;
  width: 280px;
  min-height: 200px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 20px;
  background-color: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 608px;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 75px;
    padding-right: 75px;
  }
`;
export const Email = styled.input`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: solid 1px var(--clr-brand-blue);
  &.invalid {
    border-color: var(--clr-brand-red);
  }

  padding-left: 16px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`;
export const Validation = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
  margin-left: 15px;
`;
export const EmailValidation = styled.div`
  position: relative;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const PasswordValidation = styled.div`
  margin-bottom: 110px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;
export const Password = styled.input`
  font-size: 16px;
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  outline: none;
  border: solid 1px var(--clr-brand-blue);
  &.invalid {
    border-color: var(--clr-brand-red);
  }

  padding-left: 16px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`;
export const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  border-radius: 40px;
  width: 100%;
  height: 48px;
  margin-bottom: 8px;
  border: none;
  color: var(--clr-bcg-user);
  background-color: var(--clr-brand-blue);
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-secondary);
  text-align: center;
`;
export const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
export const Link = styled(NavLink)`
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
  font-size: 12px;
  font-weight: 400;
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
export const Svg = styled.svg`
  stroke: var(--clr-brand-red);
  display: block;
  width: 24px;
  height: 24px;
  fill: none;
`;
export const SvgEye = styled.svg`
  stroke: var(--clr-brand-blue);
  display: block;
  width: 24px;
  height: 24px;

  fill: none;
`;
