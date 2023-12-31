import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  /* min-height: calc(100% - 68px); */
  width: 100%;
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    /* min-height: calc(100% - 92px); */
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    /* min-height: calc(100% - 88px); */
    max-width: 1280px;
    padding: 0 16px;
  }
`;
