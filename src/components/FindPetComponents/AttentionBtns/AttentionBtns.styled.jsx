import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import '../../../index.css';

const MEDIA_TABLET = 'min-width: 768px';
// const MEDIA_DESKTOP = 'min-width: 1280px';

export const AuthNavStyled = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 12px;

  margin: 40px auto 0 auto;

  @media (${MEDIA_TABLET}) {
    flex-direction: row;
  }
`;

export const LoginStyled = styled.li`
  font-weight: 700;
  background-color: var(--clr-brand-yellow);
  border-radius: 40px;
  padding: 8px 20px;
  gap: 8px;
  width: 240px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    box-shadow: 3px 3px 3px var(--clr-brand-yellow);
  }

  @media (${MEDIA_TABLET}) {
    width: 165px;
  }
`;

export const RegisterStyled = styled.li`
  display: flex;
  justify-content: center;

  background: #fff;
  font-weight: 600;
  border-radius: 40px;
  padding: 7px 20px;
  border: 2px solid var(--clr-brand-yellow);
  width: 240px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    box-shadow: 3px 3px 3px var(--clr-brand-yellow);
  }

  @media (${MEDIA_TABLET}) {
    width: 142px;
  }
`;

export const LogLink = styled(NavLink)`
  color: var(--clr-primary-inv);
  display: flex;
  justify-content: center;
`;

export const RegLink = styled(NavLink)`
  color: var(--clr-brand-yellow);
`;

export const IconLogin = styled.svg`
  fill: var(--clr-bcg);
  margin-left: 12px;
  width: 24px;
  height: 24px;

  transition: 300ms;
`;
