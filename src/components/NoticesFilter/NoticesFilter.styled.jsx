import styled from '@emotion/styled';
import { ReactComponent as FilterIcon } from '../../images/filter.svg';

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
  stroke: white;
`;

export const FilterText = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
