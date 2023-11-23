import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: var(--clr-brand-yellow);
  }
`;
