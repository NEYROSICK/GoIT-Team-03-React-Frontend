// import styled from '@emotion/styled';
import styled, { keyframes } from 'styled-components';
import '../../../../index.css';

const MEDIA_TABLET = 'min-width: 768px';
// const MEDIA_DESKTOP = 'min-width: 1280px';

const DeleteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 389px;
  padding: 60px 12px;

  border-radius: 20px;
  background: #fff;

  @media (${MEDIA_TABLET}) {
    width: 608px;
    height: 352px;
    padding: 60px 110px;

    border-radius: 40px;
  }
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

const DeleteTitle = styled.h3`
  color: var(--, #111);
  text-align: center;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.96px;
  width: 200px;
  margin: 0 auto;

  @media (${MEDIA_TABLET}) {
    color: #000;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.28px;
    width: 288px;
  }
`;

const DeleteText = styled.p`
  margin: 14px auto 0 auto;

  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 240px;

  @media (${MEDIA_TABLET}) {
    color: #000;
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.16px;
    width: 393px;
    height: 66px;
  }
`;

const DeleteBtnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 44px;

  @media (${MEDIA_TABLET}) {
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    gap: 17px;
    margin-top: 48px;
  }
`;

const DeleteCancelBtn = styled.button`
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
  border: 2px solid #54adff;
  outline: none;
  background: #fff;
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
    margin: 0;
  }
`;

const DeleteCancelBtnText = styled.p`
  color: var(--clr-brand-blue);
  z-index: 2;
  transition: 300ms;
`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`;

const DeleteYesBtn = styled.button`
  position: relative;
  display: flex;
  color: #fff;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #54adff;
  outline: none;
  border: none;
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

  &:hover svg {
    animation: ${shakeAnimation} 0.5s ease;
  }

  @media (${MEDIA_TABLET}) {
    width: 129px;
    margin: 0;
  }
`;

const DeleteYesBtnText = styled.p`
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 2;
`;

const DeleteYesIcon = styled.svg`
  stroke: #fff;
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
`;

export {
  DeleteWrapper,
  DeleteIcon,
  DeleteTitle,
  DeleteText,
  DeleteBtnsWrapper,
  DeleteCancelBtn,
  DeleteCancelBtnText,
  DeleteYesBtn,
  DeleteYesBtnText,
  DeleteYesIcon,
};
