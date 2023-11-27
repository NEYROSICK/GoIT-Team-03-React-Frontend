import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorPicture = styled.picture`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1280px) {
    width: 822px;
    height: 360px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ErrorH2 = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 41.6px;
  text-align: center;
  padding-bottom: 80px;
`;

export const ErrorLink = styled(Link)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 18px auto;
  font-weight: 700px;
  font-size: 16px;
  line-height: 21.86px;
  text-align: center;
  border-radius: 40px;
  background-color: var(--clr-brand-blue);
  color: var(--clr-primary-inv);
  padding: 9px;
  width: 248px;

  &: hover {
    background: var(--clr-brand-blue-grd);
  }

  @media (min-width: 768px) {
    margin: 70px auto;
  }

  @media (max-width: 767px) {
    margin: 60px auto;
  }
`;

export const ErrorIcon = styled.svg`
  margin-left: 12px;
  width: 24px;
  height: 24px;
`;

export const DivError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
`;
