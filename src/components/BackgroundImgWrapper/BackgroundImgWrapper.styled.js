import styled from 'styled-components';

import bgMob from '../../images/BackgroundImg/bg_mob@1x.png';
import bgMobRetina from '../../images/BackgroundImg/bg_mob@2x.png';
import bgTab from '../../images/BackgroundImg/bg_tab@1x.png';
import bgTabRetina from '../../images/BackgroundImg/bg_tab@2x.png';
import bgDesk from '../../images/BackgroundImg/bg_desc@1x.png';
import bgDeskRetina from '../../images/BackgroundImg/bg_desc@2x.png';

export const BackgroundImgWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgMob});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;

  @media (webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${bgMobRetina});
  }

  @media only screen and (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${bgTab});
    background-position-y: -68px;

    @media (webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bgTabRetina});
      background-position-y: -68px;
    }
  }

  @media only screen and (min-width: 1280px) {
    background-image: url(${bgDesk});
    background-position-y: -68px;
    height: 100vh;

    @media (webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bgDeskRetina});
      background-position-y: -68px;
    }
  }

  z-index: -1;
`;
