import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BurgerWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100% - 50px);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

export const BurgerNav = styled.nav`
  background-color: var(--clr-bcg);
  background-color: #dbd6d6;
  padding: 20px;
  height: 100%;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: var(--clr-brand-yellow);
  }
  color: inherit;
`;
