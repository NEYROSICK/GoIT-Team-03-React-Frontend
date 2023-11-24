import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 209px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 112px;
  }
`;

export const PageTitle = styled.h1`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #111111;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`;
