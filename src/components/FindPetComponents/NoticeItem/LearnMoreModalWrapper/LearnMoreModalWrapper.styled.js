import styled from '@emotion/styled';
import '../../../../index.css';

const MEDIA_TABLET = 'min-width: 768px';

const LearnMoreWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 90vh;
  padding: 44px 12px 16px 12px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  overflow-y: auto;
  overflow-x: hidden;

  @media (${MEDIA_TABLET}) {
    flex-direction: row;
    flex-wrap: wrap;

    width: 681px;
    height: 540px;
    padding: 32px 32px 24px 32px;

    border-radius: 40px;
    overflow: hidden;
  }
`;

const LearnMoreImgWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  min-height: 240px;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
  margin: 0 auto;

  @media (${MEDIA_TABLET}) {
    margin: 0;
    width: 262px;
    height: 298px;
  }
`;

const LearnMoreImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ItemCategory = styled.p`
  position: absolute;
  top: 16px;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0px 16px 16px 0px;
  background: var(--clr-brand-blue-lt);

  padding: 6.5px 12.98px;

  color: #111;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const LearnMoreDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 8px;

  @media (${MEDIA_TABLET}) {
    margin: 0 0 0 24px;
    width: 280px;
    height: 298px;
  }
`;

const LearnMoreTitle = styled.h3`
  color: #000;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;

  @media (${MEDIA_TABLET}) {
    height: 76px;
    margin-bottom: 12px;
  }
`;

const LearnMoreDataItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const LearnMoreDataLeft = styled.b`
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (${MEDIA_TABLET}) {
    font-size: 16px;
  }
`;

const LearnMoreDataRight = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (${MEDIA_TABLET}) {
    font-size: 16px;
  }
`;

const LearnMoreDataLink = styled.a`
  color: var(--yellow, #ffc107);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;

  @media (${MEDIA_TABLET}) {
    font-size: 16px;
  }
`;

const LearnMoreComment = styled.p`
  /* overflow: hidden; */
  margin: 12px auto;
  width: 256px;
  height: 95px;
  text-overflow: ellipsis;

  color: #000;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;

  @media (${MEDIA_TABLET}) {
    width: 618px;
    height: 48px;
    font-size: 16px;
  }
`;

const LearnMoreBtsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (${MEDIA_TABLET}) {
    width: 100%;
    height: 40px;
    flex-direction: row-reverse;
    justify-content: flex-start;
    gap: 17px;
  }
`;

const LearnMoreContactBtn = styled.a`
  position: relative;
  display: flex;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 40px;
  border: 2px solid var(--unnamed, #54adff);
  outline: none;
  background: #fff;

  color: var(--unnamed, #54adff);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  transition: 300ms;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover {
    border: 2px solid #ffffff00;
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover p {
    color: #fff;
  }

  @media (${MEDIA_TABLET}) {
    width: 129px;
    height: 40px;
  }
`;

const LearnMoreContactBtnText = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 3;

  transition: 300ms;
`;

const LearnMoreAddFvrtBtn = styled.button`
  position: relative;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  flex-shrink: 0;

  border-radius: 40px;
  background: var(--unnamed, #54adff);
  outline: none;
  border: none;

  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  transition: 300ms;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover:before {
    opacity: 1;
  }

  &:active svg {
    scale: 0.8;
  }

  @media (${MEDIA_TABLET}) {
    width: 129px;
    height: 40px;
  }
`;

const LearnMoreAddFvrtBtnText = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 3;

  transition: 300ms;
`;

const LearnMoreAddFvrtBtnIcon = styled.svg`
  stroke: #fff;
  fill: ${(props) => {
    return props.isFavorite ? '#fff' : 'var(--clr-brand-blue)';
  }};

  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 300ms;
`;

const DeleteIcon = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: var(--clr-brand-blue);
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    scale: 1.2;
  }

  @media (${MEDIA_TABLET}) {
    top: 24px;
    right: 24px;
  }
`;

export {
  LearnMoreWrapper,
  LearnMoreImgWrapper,
  LearnMoreImg,
  ItemCategory,
  LearnMoreDataWrapper,
  LearnMoreTitle,
  LearnMoreDataItem,
  LearnMoreDataLeft,
  LearnMoreDataRight,
  LearnMoreDataLink,
  LearnMoreComment,
  LearnMoreBtsWrapper,
  LearnMoreContactBtn,
  LearnMoreContactBtnText,
  LearnMoreAddFvrtBtn,
  LearnMoreAddFvrtBtnText,
  LearnMoreAddFvrtBtnIcon,
  DeleteIcon,
};
