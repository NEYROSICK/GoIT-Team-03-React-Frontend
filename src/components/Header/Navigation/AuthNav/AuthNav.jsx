
import {
  AuthNavStyled,
  LoginStyled,
  RegisterStyled,
  LogLink,
  RegLink,
} from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <LoginStyled>
        <LogLink to="/login">Log IN</LogLink>
      </LoginStyled>

      <RegisterStyled>
        <RegLink to="/register">Registration</RegLink>
      </RegisterStyled>
    </AuthNavStyled>
  );
};
