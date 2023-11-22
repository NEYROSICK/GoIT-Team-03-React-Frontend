import { Container, ImageDiv } from './HomePage.styled';
import image from '../../images/main-page.png'
const HomePage = () => {
  return (
    <Container>
      <ImageDiv>
        <h1>Take good care of your small pets</h1>
        <img src={image} />
      </ImageDiv>
    </Container>
  );
};

export default HomePage;
