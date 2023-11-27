import { useSelector } from 'react-redux';
import { UserNav } from '../Navigation/UserNav/UserNav';
import { AuthNav } from '../Navigation/AuthNav/AuthNav';
import { BurgerNav, BurgerWrapper, StyledNavLink } from './ModalBurger.Styled';

export const ModalBurger = ({ onClose }) => {
  const { token } = useSelector((state) => state.auth);
  return (
    <BurgerWrapper>
      <BurgerNav>
        {token ? <UserNav /> : <AuthNav />}
        <ul>
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
        </ul>
      </BurgerNav>
    </BurgerWrapper>
  );
};
