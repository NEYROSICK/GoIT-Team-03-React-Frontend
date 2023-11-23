import { Link } from 'react-router-dom';
import {
  AuthNavStyled,
  LoginStyled,
  RegisterStyled,
  LogRegStyled,
} from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <ul>
        <LogRegStyled>
          <LoginStyled>
            <li>
              <Link to="/login">Log IN</Link>
            </li>
          </LoginStyled>
          <RegisterStyled>
            <li>
              <Link to="/register">Registration</Link>
            </li>
          </RegisterStyled>
        </LogRegStyled>
      </ul>
    </AuthNavStyled>
  );
};
