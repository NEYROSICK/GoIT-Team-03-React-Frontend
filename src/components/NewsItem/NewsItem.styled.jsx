import styled from '@emotion/styled';

export const Article = styled.a`
  position: relative;
  width: 280px;
  height: 578px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: white;
  border-radius: 20px;
  color: black;
  cursor: pointer;
  transition: 300ms;

  overflow: hidden;
  &:hover img {
    scale: 1.1;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 556px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 534px;
  }

  &:before {
    content: '';
    position: absolute;
    top: -20px;

    width: 100%;
    height: 8px;

    border-radius: 40px;
    background: var(
      --gr-blue,
      linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%)
    );

    @media screen and (min-width: 768px) {
      top: -22px;
    }
  }

  &:hover {
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 1);
  }
`;

export const ArticleImage = styled.img`
  transition: 300ms;
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
  width: 100%;
  padding: 0 12px;
`;

export const ArticleTitle = styled.div`
  color: inherit;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;

  width: 100%;
  height: 66px;
  overflow: hidden;
  /* white-space: nowrap; */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  /* text-overflow: ellipsis; */

  @media screen and (min-width: 768px) {
    width: 310px;
  }
`;

export const ArticleDesc = styled.p`
  color: inherit;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 16px;

  width: 100%;
  height: 154px;
  overflow: hidden;
  /* white-space: nowrap; */
  display: -webkit-box;
  -webkit-line-clamp: 7;
  line-clamp: 7;
  -webkit-box-orient: vertical;
  /* text-overflow: ellipsis; */

  @media screen and (min-width: 768px) {
    height: 132px;
    -webkit-line-clamp: 6;
    line-clamp: 6;
  }

  @media screen and (min-width: 1280px) {
    height: 110px;
    -webkit-line-clamp: 5;
    line-clamp: 5;
  }
`;

export const ArticleDetail = styled.p`
  width: 160px;
  height: 22px;
  color: #888;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 40px;
`;
