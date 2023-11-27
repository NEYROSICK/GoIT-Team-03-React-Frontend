import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserNav } from '../Navigation/UserNav/UserNav';
import { AuthNav } from '../Navigation/AuthNav/AuthNav';
import { BurgerWrapper, BurgerNav, StyledNavLink } from './HeaderBurger.styled';



export const ModalBurger = ({ onClose }) => {
  const { token } = useSelector((state) => state.auth);
  return (
    <BurgerWrapper>
      
      <BurgerNav>
        {token ? <UserNav /> : <AuthNav />}

        <li>
          <StyledNavLink to="/news" onClick={() => onClose(false)}>
            News
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/notices/sell" onClick={() => onClose(false)}>
            Find pet
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/friends" onClick={() => onClose(false)}>
            Our Friends
          </StyledNavLink>
        </li>
      </BurgerNav>
    </BurgerWrapper>
  );
};
