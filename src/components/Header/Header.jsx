
import { useAuth } from '../context/AuthContext';
import { Logo } from './Logo';
import { Nav } from './Navigation/Nav';
import { AuthNav } from './Navigation/AuthNav';
import { UserNav } from './Navigation/UserNav';
import {
  HeaderContainer,
  Navigation,
  HeaderStyled,
} from './Header.styled';

export const Header = () => {
  const { isAuthenticated } = useAuth();

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
