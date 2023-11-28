import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../../redux/auth/operations';
import {
  UserNavStyledDiv,
  LinkUser,
  LogoutButton,
  IconUser,
  IconLogOut,
  UserName,
} from './UserNav.styled';
import sprite from '../../../../../ui/Icons/sprite.svg';
import { useGetMeAndPetsQuery } from '../../../../../redux/API/RTKQueryApi';

export const UserNav = () => {
  const { data, isLoading } = useGetMeAndPetsQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hendleLogout = () => {
    dispatch(logOut());
    navigate('/login');
  };
  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <UserNavStyledDiv>
          <LogoutButton onClick={() => hendleLogout()}>
            log out
            <IconLogOut>
              <use href={sprite + '#iconLogout'}></use>
            </IconLogOut>
          </LogoutButton>
          <LinkUser to="/user">
            <IconUser>
              <use href={sprite + '#iconUser'}></use>
            </IconUser>
            <UserName>{data.user.name ? data.user.name : ''}</UserName>
          </LinkUser>
        </UserNavStyledDiv>
      )}
    </>
  );
};