import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserNavStyledDiv = styled.div`
  display: flex;
  font-size: 16px;
  letter-spacing: 0.64px;
`;

export const LinkUser = styled(Link)`
  color: var(--clr-brand-yellow);
  display: inline-flex;
  padding: 8px 16px;
  align-items: center;
  gap: 12px;
`;

export const LogoutButton = styled.button`
    display:none;

  @media screen and (min-width: 1280px) {
    display: inline-flex;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    gap: 8px;
    border-radius: 40px;
    color: var(--clr-primary-inv);
    background-color: var(--clr-brand-blue);
    border: none;
  }
`;


export const IconUser = styled.svg`
  stroke: var(--clr-brand-yellow);
  width: 24px;
  height: 24px;
  fill: none;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;


export const IconLogOut = styled.svg`
  stroke: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
  fill: none;
`;

// Доробити! Розміщення кнопки логаута внизу зліва