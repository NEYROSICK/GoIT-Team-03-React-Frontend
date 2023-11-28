import styled from 'styled-components';

const MEDIA_TABLET = 'min-width: 768px';
const MEDIA_DESKTOP = 'min-width: 1280px';

export const NoNoticesFound = styled.h2`
  font-size: 24px;
  color: #000;

  @media (${MEDIA_TABLET}) {
    font-size: 32px;
  }

  @media (${MEDIA_DESKTOP}) {
    font-size: 38px;
  }
`;

export const NoNoticesFoundIcon = styled.svg`
  stroke: #ffc107;
  fill: #ffc107;

  width: 24px;
  height: 24px;

  transition: 300ms;

  &:first-child {
    transform: rotateY(180deg);
  }

  @media (${MEDIA_DESKTOP}) {
    width: 32px;
    height: 32px;
  }

  @media (${MEDIA_DESKTOP}) {
    width: 36px;
    height: 36px;
  }
`;
