// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../../../../../redux/auth/operations';
import {
  UserNavStyledDiv,
  LinkUser,
  LogoutButton,
  IconUser,
  IconLogOut,
  UserName,
  LogoutButtonDesk,
} from './UserNav.styled';
import sprite from '../../../../../ui/Icons/sprite.svg';
import { useGetMeAndPetsQuery } from '../../../../../redux/API/RTKQueryApi';

export const UserNav = ({ isModalOpen, onClose }) => {
  const { data, isLoading } = useGetMeAndPetsQuery();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const handleLogout = () => {
    onClose(false);
    localStorage.removeItem('persist:auth');
    window.location.reload();
  };
  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <UserNavStyledDiv>
          <LogoutButtonDesk onClick={() => handleLogout()}>
            log out
            <IconLogOut>
              <use href={sprite + '#iconLogout'}></use>
            </IconLogOut>
          </LogoutButtonDesk>
          {isModalOpen ? (
            <LogoutButton onClick={() => handleLogout()}>
              log out
              <IconLogOut>
                <use href={sprite + '#iconLogout'}></use>
              </IconLogOut>
            </LogoutButton>
          ) : (
            <LinkUser to="/user">
              <IconUser>
                <use href={sprite + '#iconUser'}></use>
              </IconUser>
              <UserName>{data.user.name ? data.user.name : ''}</UserName>
            </LinkUser>
          )}
        </UserNavStyledDiv>
      )}
    </>
  );
};
