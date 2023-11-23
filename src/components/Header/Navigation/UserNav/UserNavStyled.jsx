import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserNavStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  /* margin-bottom: 84px; */
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
  display: inline-flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  gap: 8px;
  border-radius: 40px;
  color: var(--clr-primary-inv);
  background-color: var(--clr-brand-blue);
`;

// Доробити! Розміщення кнопки логаута внизу зліва