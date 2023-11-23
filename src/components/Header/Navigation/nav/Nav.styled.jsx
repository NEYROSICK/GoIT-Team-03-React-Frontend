import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 20px;
  letter-spacing: 1.28px;

  @media screen and (min-width: 768px) {
    margin-top: 94px;
    letter-spacing: 1.28px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: var(--clr-brand-yellow);
  }
`;
