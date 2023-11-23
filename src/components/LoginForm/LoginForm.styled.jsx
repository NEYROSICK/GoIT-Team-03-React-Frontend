import styled from 'styled-components';
import '../../../index.css';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  font-family: Manrope, sans-serif;
  width: 280px;
  height: 425px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 20px;
  background-color: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  margin-left: auto;
  margin-right: auto;
`;
export const Email = styled.input`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: 1px solid var(--clr-brand-blue);
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
  margin-bottom: 14px;
`;
export const PasswordValidation = styled.div`
  margin-bottom: 110px;
`;
export const Password = styled.input`
  font-size: 16px;
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: 1px solid var(--clr-brand-blue);
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
`;
export const Link = styled(NavLink)`
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
  font-size: 12px;
  font-weight: 400;
`;
