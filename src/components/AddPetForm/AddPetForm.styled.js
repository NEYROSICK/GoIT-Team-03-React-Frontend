import styled from '@emotion/styled';

//* Icons Sizes

const ICON_PAW_SIZE = '24px';
const ICON_ARROW_SIZE = '24px';

export const FormSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100% - 68px);

  @media (min-width: 768px) {
    min-height: calc(100% - 92px);
  }

  @media (min-width: 768px) {
    min-height: calc(100% - 88px);
  }
`;

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 40px;
  background-color: var(--clr-bcg);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 16px 8px;
  margin: 20px auto;

  @media (min-width: 768px) {
    max-width: 458px;
    padding: 20px 34px;
    &.centered {
      padding: 20px 75px;
      max-width: 100%;
    }
  }

  @media (min-width: 1280px) {
    &.centered {
      padding: 20px 75px;
      max-width: 822px;
    }
  }
`;

export const Title = styled.h1`
  align-self: flex-start;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
  margin-left: 12px;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-left: 0;

    &.centered {
      align-self: center;
    }
  }
`;

export const StepList = styled.ul`
  display: flex;
  gap: 12px;
  color: var(--clr-secondary);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.66px;
  letter-spacing: 0.1px;
  margin-bottom: 24px;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 26.5px; /* 165.625% */
    letter-spacing: 0.1px;
    gap: 16px;
    margin-bottom: 16px;
    width: 392px;
  }

  & > li {
    display: flex;
    flex-direction: column;
    flex-basis: calc((100% / 3));
    gap: 12px;

    &:after {
      content: '';
      display: block;
      position: static;
      height: 8px;
      background-color: var(--clr-brand-blue-lt);
      border-radius: 8px;
    }

    &.is-selected {
      color: var(--clr-brand-blue);
      &:after {
        background-color: var(--clr-brand-blue);
      }
    }

    &.is-done {
      color: var(--clr-brand-green);
      &:after {
        background-color: var(--clr-brand-green);
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100vw;
  max-width: 264px;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    max-width: 390px;
  }
`;

export const ButtonNextBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;

  width: 100%;
  height: 40px;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  transition:
    gap 0.3s,
    box-shadow 0.3s;

  @media (min-width: 768px) {
    width: auto;
    flex-grow: 1;
    transition: flex-grow 0.3s;
  }

  &.buttonNext {
    margin-bottom: 10px;
    background-color: var(--clr-brand-blue);
    border: none;
    border-radius: 40px;
    color: var(--clr-primary-inv);

    &:hover {
      flex-grow: 2;
    }
  }

  &.buttonBack {
    color: var(--clr-brand-blue);
    background: none;
    border: none;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 10px;
      width: 100%;
      height: 40px;
      border-radius: 40px 0 0 40px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; /* transition: opacity 0.3s ease-in-out; */
      transition: opacity 0.3s;
      z-index: 0;
      pointer-events: none;
      opacity: 0;
    }

    &:hover {
      flex-grow: 2;

      &::before {
        opacity: 1;
      }
    }
  }

  & svg {
    width: 0;
    transition: width 0.3s;
  }

  &:hover {
    gap: 12px;
    & svg {
      width: ${ICON_PAW_SIZE};
    }
  }
`;

export const IconPaw = styled.svg`
  width: ${ICON_PAW_SIZE};
  height: ${ICON_PAW_SIZE};
  fill: var(--clr-primary-inv);
`;

export const IconArrow = styled.svg`
  width: ${ICON_ARROW_SIZE};
  height: ${ICON_ARROW_SIZE};
  stroke: var(--clr-brand-blue);
`;
