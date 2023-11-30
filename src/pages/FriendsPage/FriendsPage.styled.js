import styled from '@emotion/styled';

export const OurFriendsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0px 20px;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0px 32px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0px 16px;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: auto;

  padding-top: 20px;
  @media only screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 60px;
    width: 1280px;
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
