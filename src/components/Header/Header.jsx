import { useSelector } from 'react-redux';
import { Logo } from './Logo';
import { Nav } from './Navigation/Nav';
import { AuthNav } from './Navigation/AuthNav';
import { UserNav } from './Navigation/UserNav';
import {
  HeaderContainer,
  Navigation,
  HeaderStyled,
} from './Header.styled';
import { selectIsAuthenticated } from '../../redux/auth/authSlice';

export const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <HeaderContainer>
      <HeaderStyled>
        <Logo />
        <Navigation>
          <Nav />
          {isAuthenticated ? <UserNav /> : <AuthNav />}
        </Navigation>
      </HeaderStyled>
    </HeaderContainer>
  );
};
