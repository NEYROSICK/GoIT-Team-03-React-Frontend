import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../Container/Container';
import { ModalUserNav } from './ModalUserNav/ModalUserNav';
import {
  BurgerWrapper,
  ButtonContainer,
  IconLogOut,
  LogoutButton,
  NavContainer,
  NavList,
  StyledNavLink,
} from './ModalBurger.styled';
import sprite from '../../../../ui/Icons/sprite.svg';
import { ModalAuthNav } from './ModalAuthNav/ModalAuthNav';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { logOut } from '../../../../redux/auth/operations';

export const ModalBurger = ({ onClose, isModalOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    onClose(false);
    dispatch(logOut());
    navigate('/login');
    localStorage.removeItem('persist:auth');
    window.location.reload();
  };

  const handleKeydown = useMemo(
    () => (e) => {
      if (e.code === 'Escape') {
        onClose(false);
      }
    },

    [onClose],
  );

  useEffect(() => {
    if (!isModalOpen) return;

    window.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'visible';
    };
  }, [handleKeydown, isModalOpen]);

  function checkScreenWidth() {
    if (window.innerWidth > 1280) {
      onClose(false);
    }
  }

  window.addEventListener('resize', checkScreenWidth);

  return (
    <BurgerWrapper className={isModalOpen ? 'isOpen' : ''}>
      <Container>
        <NavContainer>
          {token ? (
            <ModalUserNav onClose={onClose} />
          ) : (
            <ModalAuthNav onClose={onClose} />
          )}
          <NavList>
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
                Our friends
              </StyledNavLink>
            </li>
          </NavList>
          {token ? (
            <ButtonContainer>
              <LogoutButton onClick={() => handleLogout()}>
                log out
                <IconLogOut>
                  <use href={sprite + '#iconLogout'}></use>
                </IconLogOut>
              </LogoutButton>
            </ButtonContainer>
          ) : (
            <></>
          )}
        </NavContainer>
      </Container>
    </BurgerWrapper>
  );
};
