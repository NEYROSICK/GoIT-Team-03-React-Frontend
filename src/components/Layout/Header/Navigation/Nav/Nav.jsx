import { NavStyled, StyledNavLink } from './Nav.styled';

export const Nav = () => {
  return (
    <NavStyled>
      <li>
        <StyledNavLink to="/news">News</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/notices/sell">Find pet</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/friends">Our Friends</StyledNavLink>
      </li>
    </NavStyled>
  );
};
