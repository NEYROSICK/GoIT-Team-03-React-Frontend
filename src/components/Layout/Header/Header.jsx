import { useSelector } from 'react-redux';
import { Logo } from './Logo/Logo';
import { Nav } from './Navigation/Nav/Nav';
import { AuthNav } from './Navigation/AuthNav/AuthNav';
import { UserNav } from './Navigation/UserNav/UserNav';
import { HeaderBurger } from './HeaderBurger/HeaderBurger';
import { Navigation, HeaderSection } from './Header.styled';
import { Container } from '../Container/Container';

export const Header = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <Container>
      <HeaderSection>
        <Logo />
        <Navigation>
          {token ? <UserNav /> : <AuthNav />}
          <Nav />
        </Navigation>
        <HeaderBurger />
      </HeaderSection>
    </Container>
  );
};
