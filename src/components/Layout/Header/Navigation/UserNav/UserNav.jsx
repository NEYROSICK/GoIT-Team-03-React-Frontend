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
import {
  useGetMeAndPetsQuery,
  useLogOutMutation,
} from '../../../../../redux/API/RTKQueryApi';
import { useNavigate } from 'react-router';
import { selectToken } from '../../../../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const UserNav = ({ isModalOpen, onClose }) => {
  const Token = useSelector(selectToken);
  const [LogOut] = useLogOutMutation();
  const navigate = useNavigate();
  const { data, isLoading } = useGetMeAndPetsQuery();

  const handleLogout = async () => {
    onClose(false);
    await LogOut(Token).unwrap();
    navigate('/login');
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
