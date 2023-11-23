import styled from '@emotion/styled';
import { ReactComponent as FilterIcon } from '../../images/filter.svg';
import { ReactComponent as ChevronDownIcon } from '../../images/chevron-down.svg';

export const FilterButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #c5dff6;
  color: #54adff;

  &:hover,
  &:focus {
    color: #ffffff;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
  @media screen and (min-width: 768px) {
    padding: 9px 38px;
    width: 152px;
    border: 2px solid #54adff;
    border-radius: 40px;
    color: #54adff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: transparent;
    transition: 300ms;

    &:hover,
    &:focus {
      color: #fef9f9;
      border: none;
      background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    }
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const StyledFilterIcon = styled(FilterIcon)`
  stroke: currentColor;
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
  margin-top: 16px;
  padding: 8px;
  padding: ${(props) => props.active && '14px 8px'};
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 3px 8px 14px 0px #88c6fd30;
  
  transition: opacity 400ms;
`;

export const DropDown = styled.div``;

export const FilterHeader = styled.h4`
margin-bottom: 8px;
font-weight: 700;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.04em;
color: #54ADFF;
}  
`;

export const FilterMenu = styled.div`
  margin-bottom: 8px;
  border-radius: 20px;
  background-color: #cce4fb;
  transition: 300ms;
  padding: 8px;
  padding: ${(props) => props.active && '14px'};
  
  
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
  color: #54adff;
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
  gap: 12px;
  color: #54adff;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
`;

export const FormInput = styled.input``;

export const StyledChevronDownIcon = styled(ChevronDownIcon)`
  stroke: currentColor;
  width: 24px;
  height: 24px;
  display: ${(props) => props.active && 'none'};
`;
