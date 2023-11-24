import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.ul`
  display: none;

  /* @media screen and (min-width: 768px) {
    margin-top: 94px;
    letter-spacing: 1.28px;
    flex-direction: column;
    margin-top: 40px;
  } */

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 40px;
    letter-spacing: 1.28px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: var(--clr-brand-yellow);
  }
`;
