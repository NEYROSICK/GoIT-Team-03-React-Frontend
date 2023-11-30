import styled from 'styled-components';

export const FlexContainer = styled.div`
  position: relative;
  height: calc(100vh - 68px);

  @media (min-width: 768px) {
    height: calc(100vh - 92px);
  }

  @media (min-width: 1280px) {
    height: calc(100vh - 88px);
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h1`
  padding-top: 40px;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 137.5% */
  letter-spacing: normal;

  @media (min-width: 768px) {
    padding-top: 56px;
    font-size: 68px;
    font-style: normal;
    font-weight: 700;
    line-height: 100px; /* 147.059% */
    text-shadow: var(--clr-primary-inv) 1px 0 1px;
  }

  @media (min-width: 1280px) {
    padding: 0;
    font-size: 68px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 88.4px */
    width: 501px;
  }
`;

export const Img = styled.img`
  position: absolute;
  flex-shrink: 0;
  min-width: 474px;
  width: 474px;
  height: auto;
  bottom: 0px;
  transform: translateX(-108px);
  z-index: -1;

  @media (min-width: 768px) {
    min-width: 985px;
    width: 985px;
    transform: translateX(-130px);
  }

  @media (min-width: 1280px) {
    min-width: 917px;
    width: 917px;
    transform: translateX(-146px);
  }
`;
