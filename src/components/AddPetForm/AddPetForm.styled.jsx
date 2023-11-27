import styled from '@emotion/styled';

//* Icons Sizes

const ICON_PAW_SIZE = '24px';
const ICON_ARROW_SIZE = '24px';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
`;

export const FormStyled = styled.div`
  width: 100%;
  border-radius: 40px;
  background-color: var(--clr-bcg);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 16px 8px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 458px;
    padding: 20px 34px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
  margin-left: 12px;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-left: 0;
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

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 26.5px; /* 165.625% */
    letter-spacing: 0.1px;
    gap: 16px;
    margin-bottom: 16px;
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
      /* width: 80px; */
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
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
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
  transition: gap 0.3s;

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

    &:hover {
      flex-grow: 2;
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
