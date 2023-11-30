import styled from '@emotion/styled';

export const AddButton = styled.button`
  z-index: 5;
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
  background: var(--clr-brand-blue);
  color: var(--clr-bcg-user);

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

  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    position: relative;
    width: 129px;
    height: 40px;
    border-radius: 40px;
    padding: 9px 16px;
    flex-direction: row;
  }
`;

export const StyledPlusIcon = styled.svg`
  stroke: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledPlusIconSmall = styled.svg`
  display: none;
  stroke: var(--clr-primary-inv);
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
    fill: var(--clr-primary-inv);
  }
`;

export const AddButtonText = styled.span`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  z-index: 2;

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.04em;
    text-align: left;
  }
`;
