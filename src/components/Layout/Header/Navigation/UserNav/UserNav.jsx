// import { LogoutButton } from '../../LogoutButton';
import { UserNavStyledDiv, LinkUser, LogoutButton } from './UserNavStyled';

export const UserNav = () => {
  return (
    <UserNavStyledDiv>
      <LinkUser to="/user">UserPage</LinkUser>
      <LogoutButton />
    </UserNavStyledDiv>
  );
};
