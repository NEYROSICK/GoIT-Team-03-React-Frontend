import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  max-width: 205px;
  height: 121px;

  @media screen and (min-width: 768px) {
    max-width: 319px;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const UserNavList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  flex-direction: row;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const NavLi = styled.li`
  display: flex;
  border: none;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-brand-blue-lt);
  border-radius: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: 300ms;

  &:hover,
  &:focus {
    color: var(--clr-primary-inv);
  }
`;
export const StyledLink = styled(Link)`
  padding: 8px 16px;
  text-decoration: none;
  color: var(--clr-brand-blue);
  color: ${(props) => props.active && 'var(--clr-primary-inv)'};
  background-color: ${(props) => props.active && 'var(--clr-brand-blue)'};
  border-radius: 40px;
  &:focus,
  &:hover {
    color: var(--clr-primary-inv);
    background-color: var(--clr-brand-blue);
  }
`;
