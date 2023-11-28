import sprite from '../../../../../ui/Icons/sprite.svg';
import {
  AuthNavStyled,
  AuthNavDesk,
  LoginStyled,
  RegisterStyled,
  IconLogin,
} from './AuthNav.styled';

export const AuthNav = ({ isModalOpen, onClose }) => {
  return (
    <>
      {isModalOpen ? (
        <AuthNavStyled>
          <li>
            <LoginStyled
              to="/login"
              onClick={() => {
                onClose(false);
              }}
            >
              Log In
              <IconLogin>
                <use href={sprite + '#iconPaw'}></use>
              </IconLogin>
            </LoginStyled>
          </li>

          <li>
            <RegisterStyled
              to="/register"
              onClick={() => {
                onClose(false);
              }}
            >
              Registration
            </RegisterStyled>
          </li>
        </AuthNavStyled>
      ) : (
        <AuthNavDesk>
          <li>
            <LoginStyled
              to="/login"
              onClick={() => {
                onClose(false);
              }}
            >
              Log In
              <IconLogin>
                <use href={sprite + '#iconPaw'}></use>
              </IconLogin>
            </LoginStyled>
          </li>

          <li>
            <RegisterStyled
              to="/register"
              onClick={() => {
                onClose(false);
              }}
            >
              Registration
            </RegisterStyled>
          </li>
        </AuthNavDesk>
      )}
    </>
  );
};
