import {
  NavContaier,
  NavLi,
  NavList,
  StyledLink,
  UserNavList,
} from './NoticesCategoriesNav.styled';
import { publicCategories, userCategories } from './categories';
import { useLocation, Link } from 'react-router-dom';

const NoticesCategoriesNav = () => {
  const { pathname, search } = useLocation();
  return (
    <NavContaier>
      <NavList>
        {publicCategories.map(({ id, to, text }) => (
          <NavLi key={id}>
            <StyledLink to={{ pathname: to, search }}>{text}</StyledLink>
          </NavLi>
        ))}
      </NavList>

      <UserNavList>
        {userCategories.map(({ id, to, text }) => (
          <NavLi key={id}>
            <StyledLink to={{ pathname: to, search }}>{text}</StyledLink>
          </NavLi>
        ))}
      </UserNavList>
    </NavContaier>
  );
};

export default NoticesCategoriesNav;
