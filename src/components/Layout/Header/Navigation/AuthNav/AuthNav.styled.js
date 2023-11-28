import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../../../../../index.css';

export const AuthNavStyled = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 16px;
    letter-spacing: 0.64px;
    gap: 20px;
    flex-direction: row;
  }
`;

export const LoginStyled = styled.li`
  font-weight: 700;
  background-color: var(--clr-brand-yellow);
  border-radius: 40px;
  gap: 8px;
  width: 165px;
  cursor: pointer;
`;

export const RegisterStyled = styled.li`
  font-weight: 600;
  border-radius: 40px;
  border: 2px solid var(--clr-brand-yellow);
  cursor: pointer;
`;

export const LogLink = styled(Link)`
  color: var(--clr-primary-inv);
  display: flex;
  justify-content: center;
  padding: 8px 20px;
`;

export const RegLink = styled(Link)`
  color: var(--clr-brand-yellow);
  display: flex;
  justify-content: center;
  padding: 7px 20px;
`;

export const IconLogin = styled.svg`
  fill: var(--clr-bcg);
  margin-left: 12px;
  width: 24px;
  height: 24px;
`;
