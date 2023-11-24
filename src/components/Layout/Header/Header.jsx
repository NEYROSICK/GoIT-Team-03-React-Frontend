import { useSelector } from 'react-redux';
import { Logo } from './Logo';
import { Nav } from './Navigation/Nav/Nav';
import { AuthNav } from './Navigation/AuthNav/AuthNav';
import { UserNav } from './Navigation/UserNav/UserNav';
import { Navigation, HeaderSection } from './Header.styled';
// import { selectIsAuthenticated } from '../../../redux/auth/selectors';
import { Container } from '../Container/Container';

export const Header = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <HeaderSection>
      <Container>
        <Logo />
        <Navigation>
          {token ? <UserNav /> : <AuthNav />}
          <Nav />
        </Navigation>
      </Container>
    </HeaderSection>
  );
};
