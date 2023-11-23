import { useSelector } from 'react-redux';
import { Logo } from './Logo';
import { Nav } from './Navigation/nav/Nav';
import { AuthNav } from './Navigation/AuthNav/AuthNav';
import { UserNav } from './Navigation/UserNav/UserNav';
import { HeaderContainer, Navigation, HeaderStyled } from './Header.styled';
import { selectIsAuthenticated } from '../../redux/auth/selectors';

export const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <HeaderContainer>
      <HeaderStyled>
        <Logo />
        <Navigation>
          {isAuthenticated ? <UserNav /> : <AuthNav />}
          <Nav />
        </Navigation>
      </HeaderStyled>
    </HeaderContainer>
  );
};
