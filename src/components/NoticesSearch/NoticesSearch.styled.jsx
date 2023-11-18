import styled from '@emotion/styled';

export const SearchForm = styled.form`
  position: relative;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 24px;

  @media screen and (min-width: 768px) {
    width: 608px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 80px;
  border: none;
  border-radius: 24px;

  font-family: 'Inter';
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  box-shadow: 3px 8px 14px 0px #88c6fd30;
  color: #888888;

  &:hover,
  &:focus {
    box-shadow: 7px 13px 14px 0px #74b1e83d;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const SearchSubmitIcon = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;

  position: absolute;
  right: 12px;
  top: 10px;

  line-height: 0;
  background-color: #54adff;


  transition: 250ms;
`;

export const SearchCleanIcon = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;

  position: absolute;
  right: 13px;
  top: 10px;

  line-height: 0;
  background-color: #FFC107;

`;
