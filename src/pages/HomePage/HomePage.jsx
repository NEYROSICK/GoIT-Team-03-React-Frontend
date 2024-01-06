import { Img, FlexContainer, Title } from './HomePage.styled';

import imgMob from '../../images/HomePageImg/main_mob.png';
import imgMob2x from '../../images/HomePageImg/main_mob@2x.png';
import imgTab from '../../images/HomePageImg/main_tab.png';
import imgTab2x from '../../images/HomePageImg/main_tab@2x.png';
import imgDesk from '../../images/HomePageImg/main_desk.png';
import imgDesk2x from '../../images/HomePageImg/main_desk@2x.png';

import { Container } from '../../components/Layout/Container/Container';

const HomePage = () => {
  return (
    <FlexContainer>
      <Container>
        <Title>Take good care of your small pets</Title>
        <picture>
          <source
            srcSet={`${imgDesk} 1x, ${imgDesk2x} 2x`}
            media="(min-width: 1280px)"
            type="image/jpg"
          />
          <source
            srcSet={`${imgTab} 1x, ${imgTab2x} 2x`}
            media="(min-width: 768px)"
            type="image/jpg"
          />
          <source srcSet={`${imgMob} 1x, ${imgMob2x} 2x`} type="image/jpg" />
          <Img src={imgMob} alt="Beard shaving" />
        </picture>
      </Container>
    </FlexContainer>
  );
};

export default HomePage;
