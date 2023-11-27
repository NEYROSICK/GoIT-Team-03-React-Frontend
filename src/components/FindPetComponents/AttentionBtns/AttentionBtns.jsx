import sprite from '../../../ui/Icons/sprite.svg';
import {
  AuthNavStyled,
  LoginStyled,
  RegisterStyled,
  LogLink,
  RegLink,
  IconLogin,
} from './AttentionBtns.styled';

const AttentionBtns = () => {
  return (
    <AuthNavStyled>
      <LoginStyled>
        <LogLink to="/login">
          Log IN
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

export default AttentionBtns;
