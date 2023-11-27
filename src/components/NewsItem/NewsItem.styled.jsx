import styled from '@emotion/styled';

export const Article = styled.a`
  width: 280px;
  height: 578px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: white;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 556px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 534px;
  }
`;

export const ArticleImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 252px;
  background-color: rgba(230, 230, 230, 0.5);
  border-radius: 20px;
  margin-bottom: 16px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;

export const ArticleTitle = styled.div`
  width: 267px;
  color: #111111;
  font-family: Manrope;
  word-wrap: break-word;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 310px;
  }
`;

export const ArticleDesc = styled.p`
  height: 154px;
  overflow: hidden;
  margin-bottom: auto;
  @media screen and (min-width: 768px) {
    height: 132px;
  }

  @media screen and (min-width: 1280px) {
    height: 110px;
  }
`;

export const ArticleDetail = styled.div`
  align-self: flex-end;
`;
