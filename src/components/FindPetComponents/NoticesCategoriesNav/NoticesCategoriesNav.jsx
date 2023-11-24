import {
  NavContaier,
  NavLi,
  NavList,
  StyledLink,
  UserNavList,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled.jsx';
import categories from '../NoticesCategoriesNav/categories.js';
import { useLocation } from 'react-router-dom';

const {publicCategories, userCategories} = categories;


const NoticesCategoriesNav = () => {
  const { pathname, search } = useLocation();
  const location = useLocation();
  
  return (
    <NavContaier>
      <NavList>
        {publicCategories.map(({ id, to, text }) => (
          <NavLi key={id} >
            <StyledLink to={{ pathname: to, search }} active={location.pathname === to ? true : undefined} >{text}</StyledLink>
          </NavLi>
          
        ))}
      </NavList>
      
      <UserNavList>
        {userCategories.map(({ id, to, text }) => (
          <NavLi key={id}>
            <StyledLink to={{ pathname: to, search }} active={location.pathname === to ? true : undefined}>{text}</StyledLink>
          </NavLi>
        ))}
      </UserNavList>
    </NavContaier>
  );
};

export default NoticesCategoriesNav;
