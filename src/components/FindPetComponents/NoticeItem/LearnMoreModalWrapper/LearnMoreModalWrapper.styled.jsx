import styled from '@emotion/styled';
import '../../../../index.css';

const MEDIA_TABLET = 'min-width: 768px';

const LearnMoreWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 786px;
  padding: 60px 20px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (${MEDIA_TABLET}) {
    width: 608px;
    height: 429px;
    padding: 60px 40px;

    border-radius: 40px;
  }
`;

export { LearnMoreWrapper };
