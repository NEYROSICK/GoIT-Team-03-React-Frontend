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
  return (
    <UserNavStyledDiv>
      <LogoutButton>
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
