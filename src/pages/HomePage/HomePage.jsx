import { Container } from './HomePage.styled';
import UserPage from '../UserPage/UserPage';
const HomePage = () => {
  return (
    <Container>
      <h1>Outlet</h1>
      <UserPage />
    </Container>
  );
};

export default HomePage;
