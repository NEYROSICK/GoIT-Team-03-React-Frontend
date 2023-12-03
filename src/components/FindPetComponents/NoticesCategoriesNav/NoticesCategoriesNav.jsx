import {
  NavContainer,
  NavList,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled.js';
import NavItem from './NavItem';
import categories from '../NoticesCategoriesNav/categories.js';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../../redux/auth/selectors.jsx';

const { publicCategories, userCategories } = categories;

const generateNavItems = (categories, search) =>
  categories.map(({ id, to, text }) => (
    <NavItem key={id} to={to} text={text} search={search} />
  ));

const NoticesCategoriesNav = () => {
  const { search } = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <NavContainer>
      <NavList>{generateNavItems(publicCategories, search)}</NavList>
      {isAuthenticated && (
        <NavList>{generateNavItems(userCategories, search)}</NavList>
      )}
    </NavContainer>
  );
};

export default NoticesCategoriesNav;
