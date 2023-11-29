import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserNavStyledDiv = styled.div`
  display: flex;
  font-size: 16px;
  letter-spacing: 0.64px;
  margin-right: 8px;
  align-items: center;
  gap: 40px;
`;

export const LinkUser = styled(Link)`
  color: var(--clr-brand-yellow);
  display: inline-flex;
  padding: 20px 0;
  align-items: center;
  gap: 12px;

  & svg {
    transition: transform 0.7s cubic-bezier(0.61, 0.7, 0.55, 1.24);
  }

  &:hover {
    & svg {
      transform: rotateY(360deg);
    }
  }
`;

export const LogoutButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-flex;
    height: 40px;
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

export const LogoutButtonDesk = styled.button`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline-flex;
    height: 40px;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    gap: 8px;
    border-radius: 40px;
    color: var(--clr-primary-inv);
    background-color: var(--clr-brand-blue);
    border: 2px solid var(--clr-brand-blue);
    transition:
      background-color 0.3s,
      color 0.3s;

    &:svg {
      transition: stroke 0.3s;
    }

    &:hover {
      background-color: transparent;
      color: var(--clr-brand-blue);
    }
  }
`;

export const IconUser = styled.svg`
  stroke: var(--clr-brand-yellow);
  width: 28px;
  height: 28px;
  fill: none;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const IconLogOut = styled.svg`
  stroke: currentColor;
  width: 24px;
  height: 24px;
  fill: none;
`;

export const UserName = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

// Доробити! Розміщення кнопки логаута внизу зліва
