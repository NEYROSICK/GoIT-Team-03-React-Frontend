import { Container, ImageDiv } from './HomePage.styled';
import image from '../../images/main-page.png'
// import UserPage from '../UserPage/UserPage';
const HomePage = () => {
  return (
    <Container>
      {/* <h1>Outlet</h1>
      <UserPage /> */}
      <ImageDiv>
        <h1>Take good care of your small pets</h1>
        <img src={image} />
      </ImageDiv>
    </Container>
  );
};

export default HomePage;
