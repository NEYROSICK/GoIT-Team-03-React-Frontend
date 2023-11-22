import styled from 'styled-components';
import '../../index.css';
import { NavLink } from 'react-router-dom';



export const RegisterForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  font-family: Manrope, sans-serif;
  min-height: 200px;
  max-width: 280px;
  background-color: var(--clr-bcg-user);
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
`;
export const InputValidation = styled.div`
  margin-bottom: 14px;
`;
export const ConfirmValidation = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
`;
export const Validation = styled.p`

  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
`;
export const Input = styled.input`
  display: flex;

  padding-left: 15px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border: solid 1px var(--clr-brand-blue);
`;
export const ConfirmPassword = styled.input`
  display: flex;

  padding-left: 15px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border: solid 1px var(--clr-brand-blue);
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
`;
export const Text = styled.p`
  font-weight: 400;
  text-align: center;
  color: var(--clr-secondary);
`;
export const Link = styled(NavLink)`
  font-weight: 400;
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
`;

