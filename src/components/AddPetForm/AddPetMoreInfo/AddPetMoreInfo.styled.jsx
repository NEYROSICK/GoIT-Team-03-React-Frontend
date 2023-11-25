import styled from 'styled-components';
// import {Field} from "formik";

export const PhotoContainer = styled.img`
  background: var(--clr-brand-blue-lt);
  display: block;
  width: 182px;
  height: 182px;
  border-radius: 40px;
`;

export const LabelInputFile = styled.label`
  background: var(--clr-brand-blue-lt);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 100vh;
  height: 100vw;
  max-width: 112px;
  max-height: 112px;
  border-radius: 20px;
  margin-right: 29.3%;

  &.no-image-selected {
    border: 2px solid red;
  }
`;

export const InputFile = styled.input.attrs({
  type: 'file',
  accept: 'image/png, image/jpeg',
})`
  display: none;
`;

export const InputList = styled.div`
  margin-bottom: 24px;

  & p {
    margin-bottom: 4px;
  }

  & p,
  label {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 20px;
  }

  & input[type='text'] {
    padding: 8px 16px;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: 0.56px;

    border-radius: 40px;
    border: 1px solid var(--clr-brand-blue);
  }
`;

export const SexList = styled.div`
  display: flex;
  gap: 8px;

  & > label {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 35px;
    width: 100%;
    padding: 8px 16px;
    border-radius: 40px;
    border: 3px solid transparent;
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

  & input {
    display: none;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconPlus = styled.svg`
  width: 46px;
  height: 46px;
  stroke: var(--clr-brand-blue);
`;
