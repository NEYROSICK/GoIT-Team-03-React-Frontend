import styled, { css } from "styled-components";

import bgTab from "../../images/BackgroundImg/bg_tab@1x.png";
import bgTabRetina from "../../images/BackgroundImg/bg_tab@2x.png";
import bgDesk from "../../images/BackgroundImg/bg_desc@1x.png";
import bgDeskRetina from "../../images/BackgroundImg/bg_desc@2x.png";

export const BackgroundImgWrapper = styled.div`
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -100px;
  background-image: url(${bgTab});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgTabRetina});
  }

  @media only screen and (min-width: 768px) {
    background-position: -50px -100px;
  }

  @media only screen and (min-width: 1280px) {
    background-size: contain;
    background-position: center -50px;
    background-image: url(${bgDesk});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDeskRetina});
    }
  }

  ${({ $variant }) =>
    $variant === "main" &&
    css`
      padding-top: 60px;
      background-position: -15px -50px;

      @media only screen and (min-width: 768px) {
        padding-top: 80px;
        background-position: -15px -50px;
      }

      @media only screen and (min-width: 1280px) {
        background-position: center -50px;
      }
    `}
`;