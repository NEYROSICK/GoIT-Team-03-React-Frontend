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
  return (
    <HeaderContainer>
      <HeaderStyled>
        <Logo />
        <Navigation>
          <Nav />
          <AuthNav />
          <UserNav />
        </Navigation>
      </HeaderStyled>
    </HeaderContainer>
  );
};
