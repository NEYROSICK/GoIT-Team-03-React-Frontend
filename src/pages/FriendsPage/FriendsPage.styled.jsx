import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
