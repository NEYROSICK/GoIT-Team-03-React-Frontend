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

export const AuthNavDesk = styled.ul`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    font-size: 16px;
    letter-spacing: 0.64px;
    gap: 20px;
    flex-direction: row;
  }
`;

export const LoginStyled = styled(Link)`
  width: 165px;
  height: 40px;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  color: var(--clr-primary-inv);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;

  background-color: var(--clr-brand-yellow);
  border: 2px solid var(--clr-brand-yellow);

  border-radius: 40px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  & svg {
    transition: fill 0.3s;
  }

  &:hover {
    background-color: transparent;
    color: var(--clr-brand-yellow);

    & svg {
      fill: var(--clr-brand-yellow);
    }
  }
`;

export const RegisterStyled = styled(Link)`
  width: 165px;
  height: 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;

  color: var(--clr-brand-yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 20px;

  border-radius: 40px;
  border: 2px solid var(--clr-brand-yellow);
  cursor: pointer;

  transition:
    background-color 0.3s,
    color 0.3s;

  & svg {
    transition: fill 0.3s;
  }

  &:hover {
    background-color: var(--clr-brand-yellow);
    color: var(--clr-primary-inv);

    & svg {
      fill: var(--clr-primary-inv);
    }
  }
`;

export const IconLogin = styled.svg`
  fill: var(--clr-bcg);
  margin-left: 12px;
  width: 24px;
  height: 24px;
`;
