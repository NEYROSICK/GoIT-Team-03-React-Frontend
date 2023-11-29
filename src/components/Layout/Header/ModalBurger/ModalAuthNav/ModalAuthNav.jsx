import sprite from '../../../../../ui/Icons/sprite.svg';
import {
  AuthNavStyled,
  LoginStyled,
  RegisterStyled,
  LogLink,
  RegLink,
  IconLogin,
} from '../ModalBurger.styled';

export const ModalAuthNav = ({ onClose }) => {
  const handleClick = () => {
    onClose(false);
  };

  return (
    <AuthNavStyled>
      <LoginStyled
        onClick={() => {
          handleClick();
        }}
      >
        <LogLink to="/login">
          Log In
          <IconLogin>
            <use href={sprite + '#iconPaw'}></use>
          </IconLogin>
        </LogLink>
      </LoginStyled>

      <RegisterStyled
        onClick={() => {
          handleClick();
        }}
      >
        <RegLink to="/register">Registration</RegLink>
      </RegisterStyled>
    </AuthNavStyled>
  );
};
