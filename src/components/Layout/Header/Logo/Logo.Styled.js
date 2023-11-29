import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  line-height: 0;
  padding: 24px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 30px 0;
  }
`;

export const LogoIcon = styled.svg`
  width: 116px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 162px;
    height: 28px;
  }
`;
