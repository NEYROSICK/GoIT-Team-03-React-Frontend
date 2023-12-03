import {
  NavLi,
  StyledLink,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled.js';
import { useLocation } from 'react-router-dom';

const NavItem = ({ id, to, text, search }) => {
  const location = useLocation();

  return (
    <NavLi key={id}>
      <StyledLink
        to={{ pathname: to, search }}
        active={location.pathname === to ? 'true' : undefined}
      >
        {text}
      </StyledLink>
    </NavLi>
  );
};

export default NavItem;
