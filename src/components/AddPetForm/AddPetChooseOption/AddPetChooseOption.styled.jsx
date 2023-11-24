import styled from '@emotion/styled';
import { Field } from 'formik';

export const Input = styled(Field)`
  display: none;
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  color: var(--clr-brand-blue);

  margin-bottom: 95px;

  & > label {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 35px;
    width: fit-content;
    padding: 8px 16px;
    border-radius: 40px;
    background-color: var(--clr-brand-blue-lt);
    border: 3px solid var(--clr-brand-blue-lt);
    transition:
      background-color 0.3s,
      border-color 0.2s,
      color 0.3s;
    cursor: pointer;

    &:hover {
      border-color: var(--clr-brand-blue);
    }
  }

  & input[type='radio']:checked + label {
    background-color: var(--clr-brand-blue);
    border-color: var(--clr-brand-blue);
    color: var(--clr-primary-inv);
  }
`;

export const ButtonNext = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 100%;
  height: 40px;
  margin-bottom: 10px;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  background-color: var(--clr-brand-blue);
  border: none;
  border-radius: 40px;
  color: var(--clr-primary-inv);
`;

export const ButtonBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 100%;
  height: 40px;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  color: var(--clr-brand-blue);
  background: none;
  border: none;
`;

export const IconPaw = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--clr-primary-inv);
`;

export const IconArrow = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
`;
