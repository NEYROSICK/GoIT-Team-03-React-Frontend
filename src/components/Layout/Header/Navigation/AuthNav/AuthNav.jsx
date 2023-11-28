import sprite from '../../../../../ui/Icons/sprite.svg';
import {
  AuthNavStyled,
  LoginStyled,
  RegisterStyled,
  LogLink,
  RegLink,
  IconLogin,
} from './AuthNav.styled';

export const AuthNav = ({ isModalOpen }) => {
  return (
    <>
      {!isModalOpen ? (
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
      ) : (
        <></>
      )}
    </>
  );
};
