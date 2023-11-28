import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.ul`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    letter-spacing: 0.8px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  transition: color 0.3s;
  &:hover:not(.active) {
    color: var(--clr-brand-blue);
  }

  &.active {
    color: var(--clr-brand-yellow);
  }
  color: inherit;
  padding: 30px 20px;
`;
