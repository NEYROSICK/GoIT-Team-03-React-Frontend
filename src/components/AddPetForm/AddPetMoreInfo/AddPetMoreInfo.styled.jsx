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
  display: block;
  width: 182px;
  height: 182px;
  border-radius: 40px;

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
