import styled from '@emotion/styled';

const MEDIA_TABLET = 'min-width: 768px';
const MEDIA_DESKTOP = 'min-width: 1280px';

export const NoticeList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 24px;
  margin-top: 24px;
  width: 280px;

  @media (${MEDIA_TABLET}) {
    column-gap: 32px;

    width: 768px;
  }

  @media (${MEDIA_DESKTOP}) {
    width: 1280px;
  }

  height: 100%;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;
