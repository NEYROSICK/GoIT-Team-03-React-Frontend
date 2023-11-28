import sprite from '../../../../../ui/Icons/sprite.svg';
import {
  AuthNavStyled,
  LoginStyled,
  RegisterStyled,
  LogLink,
  RegLink,
  IconLogin,
} from '../ModalBurger.styled';

export const ModalAuthNav = () => {
  return (
    <AuthNavStyled>
      <LoginStyled>
        <LogLink to="/login">
          Log In
          <IconLogin>
            <use href={sprite + '#iconPaw'}></use>
          </IconLogin>
        </LogLink>
      </LoginStyled>

      <RegisterStyled>
        <RegLink to="/register">Registration</RegLink>
      </RegisterStyled>
    </AuthNavStyled>
  );
};
