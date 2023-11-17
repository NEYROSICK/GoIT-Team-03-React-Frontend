import { Container } from './HomePage.styled';
import UserData from '../../components/UserData/UserData';
const HomePage = () => {
  return (
    <Container>
      <h1>Outlet</h1>
      <UserData/>
    </Container>
  );
};

export default HomePage;
