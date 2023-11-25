//import { Container, ImageDiv } from './HomePage.styled';
//import image from '../../images/main-page.png'
//const HomePage = () => {
//return (
//<Container>
//<ImageDiv>
//<h1>Take good care of your small pets</h1>
//<img src={image} />
//</ImageDiv>
//</Container>
//);
//};

//export default HomePage;

import {
  ImageMainPage,
  StyledTittle,
  ContainerMainPage,
  StyledPicture,
} from './HomePage.styled';
import mainImgMobile from '../../images/HomePageImg/main_mob@1x.png';
import mainImgMobileRetina from '../../images/HomePageImg/main_mob@2x.png';
import mainImgTab from '../../images/HomePageImg/main_tab@1x.png';
import mainImgTabRetina from '../../images/HomePageImg/main_tab@2x.png';
import mainImgDesc from '../../images/HomePageImg/main_desk@1x.png';
import mainImgDescRetina from '../../images/HomePageImg/main_desk@2x.png';
import { Container } from '../../components/Layout/Container/Container';
// import { BackgroundImgWrapper } from '../../components/BackgroundImgWrapper/BackgroundImgWrapper.styled.js';
//import Container from '../../components/Layout/Container/Container';

const HomePage = () => {
  return (
    <Container>
      <ContainerMainPage>
        <StyledTittle>Take good care of your small pets</StyledTittle>

        <StyledPicture>
          {/* <source
          media="(min-width: 1280px)"
          srcSet={`${mainImgDesc} 1x, ${mainImgDescRetina} 2x`}
          type="image/png"
          alt="desktop image"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${mainImgTab} 1x, ${mainImgTabRetina} 2x`}
          type="image/png"
          alt="tablet image"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${mainImgMobile} 1x, ${mainImgMobileRetina} 2x`}
          type="image/png"
          alt="mobile image"
        /> */}
          <ImageMainPage srcSet={mainImgDesc} alt="Pets" />
        </StyledPicture>
      </ContainerMainPage>
    </Container>
  );
};

export default HomePage;
