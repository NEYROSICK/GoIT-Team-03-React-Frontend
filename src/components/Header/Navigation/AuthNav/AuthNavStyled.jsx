import styled from 'styled-components';
import '../../../../index.css';

export const AuthNavStyled = styled.nav`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 16px;

`;

export const LogRegStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


export const LoginStyled = styled.nav`
  background-color: var(--clr-brand-yellow);
  border-radius: 40px;
  padding: 8px 20px;
  font-weight: 700;
  color: var(--clr-primary-inv);
  
`;

export const RegisterStyled = styled.nav`
  font-weight: 600;
  border-radius: 40px;
  padding: 7px 20px;
  color: var(--clr-brand-yellow);
  border: 2px solid var(--clr-brand-yellow);
`;