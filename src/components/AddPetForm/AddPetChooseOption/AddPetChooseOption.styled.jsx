import styled from '@emotion/styled';
import { Field } from 'formik';

export const Input = styled(Field)`
  display: none;
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  color: var(--clr-brand-blue);

  margin-bottom: 88.35px;

  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 137.1px;
  }

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
      scale 0.3s,
      background-color 0.3s,
      border-color 0.2s,
      color 0.3s;
    cursor: pointer;

    &:hover {
      border-color: var(--clr-brand-blue);
    }

    &:active {
      scale: 0.9;
    }
  }

  & input[type='radio']:checked + label {
    background-color: var(--clr-brand-blue);
    border-color: var(--clr-brand-blue);
    color: var(--clr-primary-inv);
  }
`;

export const ErrorCategoryText = styled.p`
  position: absolute;
  bottom: -20px;
  left: 10px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);

  @media (min-width: 768px) {
    font-size: 12px;
    bottom: -20px;
  }
`;
