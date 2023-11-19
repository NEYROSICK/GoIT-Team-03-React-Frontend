import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as PlusIcon } from '../../images/plus.svg';
import { ReactComponent as PlusIconSmall } from '../../images/plus-small.svg';

export const AddButton = styled(Link)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  text-decoration: none;
  background: #54adff;
  color: #ffffff;
  transition: 300ms;

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media screen and (min-width: 768px) {
    width: 129px;
    height: 40px;
    border-radius: 40px;
    padding: 9px 16px;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const StyledPlusIcon = styled(PlusIcon)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const StyledPlusIconSmall = styled(PlusIconSmall)`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
    fill: #fef9f9;
  }
`;

export const AddButtonText = styled.span`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.04em;
    text-align: left;
  }
`;
