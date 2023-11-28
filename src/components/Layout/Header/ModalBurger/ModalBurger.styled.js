import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BurgerWrapper = styled.div`
  position: fixed;
  top: 68px;
  left: 0;
  width: 100%;
  height: calc(100% - 68px);
  background-color: var(--clr-bcg);
  z-index: 1;
  transition: transform 0.5s cubic-bezier(0.85, 0.58, 0.59, 1.1);
  transform: translateY(-100vh);

  &.isOpen {
    transform: translateY(0);
  }
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: var(--clr-brand-yellow);
  }
  color: inherit;
`;

export const NavContainer = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 68px);
`;

export const NavList = styled.ul`
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.28px;
  list-style-type: none;
  text-align: center;
  flex-grow: 3;

  @media (min-width: 768px) {
    font-size: 48px;
    font-style: normal;
    letter-spacing: 1.92px;
  }

  & li,
  & a {
    padding: 10px 0;

    @media (min-width: 768px) {
      padding: 30px 0;
    }
  }

  & li:hover {
    color: var(--clr-brand-blue);
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 70px;
  }
`;

export const UserNavStyledDiv = styled.div`
  display: flex;
  font-size: 16px;
  letter-spacing: 0.64px;
`;

export const LinkUser = styled(Link)`
  color: var(--clr-brand-yellow);
  display: inline-flex;
  padding: 8px 16px;
  align-items: center;
  gap: 12px;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
`;

export const LinkUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 84px;
  flex-grow: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  width: 135px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  gap: 8px;
  border-radius: 40px;
  color: var(--clr-primary-inv);
  background-color: var(--clr-brand-blue);
  border: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-grow: 4;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const IconUser = styled.svg`
  stroke: var(--clr-brand-yellow);
  width: 28px;
  height: 28px;
  fill: none;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const IconLogOut = styled.svg`
  stroke: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
  fill: none;
`;

export const AuthNavStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  letter-spacing: 0.64px;
  gap: 12px;
  flex-direction: column;
  margin-bottom: 30px;
  flex-grow: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LoginStyled = styled.li`
  background-color: var(--clr-brand-yellow);
  border-radius: 40px;
  gap: 8px;
  width: 165px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;
  cursor: pointer;
`;

export const RegisterStyled = styled.li`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;
  width: 165px;
  border-radius: 40px;
  border: 2px solid var(--clr-brand-yellow);
  cursor: pointer;
`;

export const LogLink = styled(Link)`
  color: var(--clr-primary-inv);
  display: flex;
  justify-content: center;
  padding: 8px 20px;
  gap: 8px;
`;

export const RegLink = styled(Link)`
  color: var(--clr-brand-yellow);
  display: flex;
  justify-content: center;
  padding: 7px 20px;
`;

export const IconLogin = styled.svg`
  fill: var(--clr-bcg);
  width: 24px;
  height: 24px;
`;
