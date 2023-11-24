import { useSelector } from 'react-redux';
import { Logo } from './Logo';
import { Nav } from './Navigation/Nav/Nav';
import { AuthNav } from './Navigation/AuthNav/AuthNav';
import { UserNav } from './Navigation/UserNav/UserNav';
import { Navigation, HeaderSection, MobileContainer } from './Header.styled';
// import { selectIsAuthenticated } from '../../../redux/auth/selectors';
import { Container } from '../Container/Container';

export const Header = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <HeaderSection>
      <Container>
        <MobileContainer>
          <Logo />
          <Navigation>
            {token ? <UserNav /> : <AuthNav />}
            <Nav />
          </Navigation>
        </MobileContainer>
      </Container>
    </HeaderSection>
  );
};
