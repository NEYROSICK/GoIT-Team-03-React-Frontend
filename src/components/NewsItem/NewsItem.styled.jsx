import styled from '@emotion/styled';

export const Article = styled.a`
  width: 280px;
  height: 566px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: white;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 544px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 522px;
  }
`;

export const ArticleImage = styled.div`
  width: 280px;
  height: 252px;
  background-color: rgba(230, 230, 230, 0.5);
  border-radius: 20px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const ArticleContent = styled.div`
  padding: 0 12px;
`;

export const ArticleTitle = styled.div`
  color: #111111;
  font-size: 24px;
  font-family: Manrope;
  font-weight: 700;
  word-wrap: break-word;
`;
