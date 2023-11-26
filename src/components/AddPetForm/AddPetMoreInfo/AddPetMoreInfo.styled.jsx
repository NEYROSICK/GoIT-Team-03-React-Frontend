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

  position: relative;
  width: 100vh;
  height: 100vw;
  max-width: 112px;
  max-height: 112px;
  border: 3px solid transparent;
  border-radius: 20px;
  margin-right: 29.3%;

  transition:
    border-color 0.3s,
    scale 0.3s;

  &.no-image-selected {
    border-color: var(--clr-brand-red);
  }

  & svg {
    transition:
      transform 0.3s,
      scale 0.3s;
  }

  &:hover {
    & svg {
      transform: rotate(180deg) scale(1.4);
    }
  }

  &:active,
  &:active & svg {
    scale: 0.9;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 112px;
    height: 112px;
    border: 3px solid transparent;
    z-index: 100;
    transition: border-color 0.3s;
    border-radius: inherit;
  }

  &:hover::after {
    border-color: var(--clr-brand-blue);
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
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  & p {
    margin-bottom: 4px;
  }

  & label {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
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
    margin-bottom: 20px;

    outline: 3px solid transparent;
    outline-offset: -3px;
    transition: outline-color 0.3s;

    &:focus {
      outline: 3px solid var(--clr-brand-blue);
    }

    &.is-invalid {
      outline-color: var(--clr-brand-red);

      &:focus {
        outline: 3px solid var(--clr-brand-red);
      }
    }
  }

  & textarea {
    height: 92px;
    border-radius: 20px;
    resize: none;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
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

export const SexContainer = styled.div`
  position: relative;
`;

export const SexList = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 14px;

  & > label {
    touch-action: none;
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
      scale 0.3s,
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

    &:active {
      scale: 0.9;
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

export const ErrorMoreInfoText = styled.p`
  position: absolute;
  bottom: 0px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);
`;

export const ErrorSex = styled.p`
  position: absolute;
  bottom: -18px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);
`;
