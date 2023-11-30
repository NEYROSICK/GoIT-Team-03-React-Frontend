import styled from '@emotion/styled';

export const FilterButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  background-color: #c5dff6;
  color: var(--clr-brand-blue);

  &:hover,
  &:focus {
    color: var(--clr-bcg-user);
    /* background-image: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%); */
    border: none;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover:before {
    opacity: 1;
  }

  & svg {
    stroke: #54adff;
  }

  &:hover svg {
    stroke: #fff;
  }

  @media screen and (min-width: 768px) {
    padding: 9px 38px;
    width: 152px;
    border: 2px solid var(--clr-brand-blue);
    border-radius: 40px;
    color: #54adff;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    transition: 300ms;

    &:focus:hover {
      border: 2px solid #ffffff00;
    }

    &:hover {
      border: 2px solid #ffffff00;
    }

    &:focus {
      border: 2px solid var(--clr-brand-blue);
    }

    &:hover p {
      color: #fff;
    }
  }
`;

export const FilterButtonText = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #54adff;
  z-index: 2;
  transition: 300ms;
`;

export const StyledFilterIcon = styled.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
  transition: 300ms;
`;

export const FilterText = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const DropContainer = styled.div`
  width: 152px;
  position: absolute;
  right: 0;
  margin-top: 16px;
  padding: 8px;
  padding: ${(props) => props.active && '14px 8px'};
  border-radius: 20px;
  background-color: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px #88c6fd30;
  z-index: 30;
  transition: opacity 400ms;

  /* display: flex;
  justify-content: center;
  align-items: center; */

  @media screen and (min-width: 768px) {
    right: auto;
  }
`;

export const FilterHeader = styled.h4`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: var(--clr-brand-blue);
`;

export const FilterMenu = styled.div`
  margin-bottom: 8px;
  border-radius: 20px;
  background-color: #cce4fb;
  transition: 300ms;
  padding: 8px;
  padding: ${(props) => props.active && '12px'};
`;

export const FilterBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
  background-color: transparent;
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--clr-brand-blue);
  transition: 300ms;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
`;

export const FilterForm = styled.form`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #54adff;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #54adff;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const FormInput = styled.input`
  appearance: none;
`;

export const StyledChevronDownIcon = styled.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
  transform: ${(props) => props.active && 'rotate(180deg)'};
  transition: 300ms;
`;

export const StyledCheckboxIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: none;
  opacity: 1;
  opacity: ${(props) => props.check && '0'};
  transition: 300ms;
`;

export const StyledCheckbocCheckedIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: none;
  opacity: 0;
  opacity: ${(props) => props.check && '1'};
  position: absolute;
  transition: 300ms;
`;
