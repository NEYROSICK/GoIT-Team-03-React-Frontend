import styled from '@emotion/styled';

export const NoticesContainer = styled.div`
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
  color: var(--clr-primary);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`;

export const FilterContainer = styled.div`
  position: relative;
  width: 280px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
`;

export const FilterAndAddContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 211px;
  align-items: end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;
