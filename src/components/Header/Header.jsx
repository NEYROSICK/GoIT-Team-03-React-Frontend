import { Link } from 'react-router-dom';
import { HeaderContainer, Navigation } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <Link to="/home">Header</Link>
      </Navigation>
    </HeaderContainer>
  );
};
