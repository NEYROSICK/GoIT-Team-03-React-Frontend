// import { LogoutButton } from '../../LogoutButton';
import {
  UserNavStyledDiv,
  LinkUser,
  LogoutButton,
  IconUser,
  IconLogOut,
} from './UserNavStyled';
import sprite from '../../../../../ui/Icons/sprite.svg';

export const UserNav = () => {
  const onLogoutBtnClick = () => {
    localStorage.removeItem('persist:auth');
    window.location.reload();
  };

  return (
    <UserNavStyledDiv>
      <LogoutButton onClick={onLogoutBtnClick}>
        log out
        <IconLogOut>
          <use href={sprite + '#iconLogout'}></use>
        </IconLogOut>
      </LogoutButton>
      <LinkUser to="/user">
        <IconUser>
          <use href={sprite + '#iconUser'}></use>
        </IconUser>
      </LinkUser>
    </UserNavStyledDiv>
  );
};
