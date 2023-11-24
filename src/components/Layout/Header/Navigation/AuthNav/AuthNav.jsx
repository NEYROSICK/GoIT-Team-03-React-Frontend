import sprite from '../../../../../ui/Icons/sprite.svg';
import {
  AuthNavStyled,
  LoginStyled,
  RegisterStyled,
  LogLink,
  RegLink,
  // IconLogin,
} from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <LoginStyled>
        <LogLink to="/login">
          Log IN
          
        </LogLink>
      </LoginStyled>

      <RegisterStyled>
        <RegLink to="/register">Registration</RegLink>
      </RegisterStyled>
    </AuthNavStyled>
  );
};

{/* <IconLogin>
  <use href={sprite + '#iconPaw'}></use>
</IconLogin>; */}
