import styled from '@emotion/styled';

export const List = styled.ul`
  max-width: 280px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    max-width: 696px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1233px;
  }
`;
