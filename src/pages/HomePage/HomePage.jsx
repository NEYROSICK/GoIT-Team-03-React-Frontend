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

import { StyledPicture, StyledTittle, Wrapper } from "./HomePage.styled";
import mainImgMobileWebp from "../../images/HomePageImg/main_mob@1x.webp";
import mainImgMobileRetinaWebp from "../../images/HomePageImg/main_mob@2x.webp";
import mainImgTabWebp from "../../images/HomePageImg/main_tab@1x.webp";
import mainImgTabWebpRetina from "../../images/HomePageImg/main_tab@2x.webp";
import mainImgDescWebp from "../../images/HomePageImg/main_desc@1x.webp";
import mainImgDescWebpRetina from "../../images/HomePageImg/main_desc@2x.webp";
import { BackgroundImgWrapper } from "../../components/BackgroundImgWrapper/BackgroundImgWrapper.styled";

const HomePage = () => {
  return (
    <BackgroundImgWrapper $variant="main">
      <Wrapper>
        <StyledTittle>Take good care of your small pets</StyledTittle>

        <StyledPicture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${mainImgDescWebp} 1x, ${mainImgDescWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${mainImgTabWebp} 1x, ${mainImgTabWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${mainImgMobileWebp} 1x, ${mainImgMobileRetinaWebp} 2x`}
            type="image/webp"
          />

          <img
            src={mainImgDescWebpRetina}
            alt="Pets"
            width={917}
            height={670}
          />
        </StyledPicture>
      </Wrapper>
    </BackgroundImgWrapper>
  );
};

export default HomePage;
