import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: calc(100% - 50px);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

const ModalNav = styled.div`
  background-color: white;
  padding: 20px;
  height: 100%;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: var(--clr-brand-yellow);
  }
  color: inherit;
  padding: 10px 20px;
`;


export const ModalBurger = () => {
  return (
    <ModalWrapper>
      <ModalNav>
        <li>
          <StyledNavLink to="/news">News</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/notices/sell">Find pet</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/friends">Our Friends</StyledNavLink>
        </li>
      </ModalNav>
    </ModalWrapper>
  );
};
