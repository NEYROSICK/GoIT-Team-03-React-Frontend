import styled from 'styled-components';
// import {Field} from "formik";

export const PhotoContainer = styled.img`
  background: var(--clr-brand-blue-lt);
  display: block;
  width: 112px;
  height: 112px;
  border-radius: 20px;
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

  border: 5px solid transparent;
  transition: border-color 0.3s;

  &.no-image-selected {
    border: 2px solid var(--clr-brand-red);
  }

  & svg {
    transition:
      transform 0.3s,
      scale 0.3s;
  }

  &:hover {
    border-color: var(--clr-brand-blue);

    & svg {
      transform: rotate(180deg) scale(1.4);
    }
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const ErMsFile = styled.div`
  color: var(--clr-brand-red);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const InputList = styled.div`
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

  & input[type='text'],
  textarea {
    padding: 8px 16px;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: 0.56px;

    border-radius: 40px;
    border: 1px solid var(--clr-brand-blue);
  }

  & textarea.commentsField {
    height: 92px;
    border-radius: 20px;
    resize: none;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconPlus = styled.svg`
  width: 40px;
  height: 40px;
  stroke: var(--clr-brand-blue);
`;

export const IconFemale = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-red);
  fill: transparent;
`;

export const IconMale = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: transparent;
`;

export const SexList = styled.div`
  display: flex;
  gap: 8px;

  & > label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 35px;
    width: 100%;
    padding: 8px 16px;
    border-radius: 40px;
    border: 3px solid transparent;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.64px;

    color: var(--clr-secondary);
    transition:
      background-color 0.3s,
      border-color 0.2s,
      color 0.3s;
    cursor: pointer;

    & > .iconMale {
      transition: transform 0.7s cubic-bezier(0.65, 1.79, 0.78, 1.02);
      transform-origin: 12px 16px;
    }

    & > .iconFemale {
      transition: transform 0.7s cubic-bezier(0.61, 0.7, 0.55, 1.24);
    }

    &:hover {
      border-color: var(--clr-brand-blue);

      & > .iconMale {
        transform: rotate(320deg);
      }

      & > .iconFemale {
        transform: rotate(-360deg);
      }
    }
  }

  & input[type='radio']:checked + label {
    background-color: var(--clr-brand-blue);
    border-color: var(--clr-brand-blue);
    color: var(--clr-primary-inv);
  }

  & input[type='radio']:checked + label > svg {
    stroke: var(--clr-primary-inv);
  }

  & input {
    display: none;
  }

  & svg {
    transition: stroke 0.3s;
  }
`;
