import styled from "styled-components";

export const SearchForm = styled.form`
  margin: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 44px;
  background-color: #111111;
  border-radius: 24px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  padding: 10px 12px 10px 20px;

  @media screen and (min-width: 768px) {
    width: 608px;
    border-radius: 20px;
    padding: 10px 20px;
  }
`;

export const SearchFormInput = styled.input`
  display: block;
  width: 100%;
  color: #888888;

  font-family: Manrope-Regular, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.56px;

  padding: 0;

  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 0.8px;
  }
`;

export const SearchButton = styled.button`
  display: block;
  height: 20px;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;

export const ButtonIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #54ADFF;
`;

export const DeleteButton = styled.button`
  display: block;
  height: 24px;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;

export const DeleteIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #FFC107;
`;