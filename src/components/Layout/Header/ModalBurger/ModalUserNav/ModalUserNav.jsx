import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../../redux/auth/operations';
import sprite from '../../../../../ui/Icons/sprite.svg';
import { useGetMeAndPetsQuery } from '../../../../../redux/API/RTKQueryApi';
import {
  UserNavStyledDiv,
  LinkUser,
  LogoutButton,
  IconUser,
  IconLogOut,
  LinkUserContainer,
} from '../ModalBurger.styled';

export const ModalUserNav = () => {
  const { data, isLoading } = useGetMeAndPetsQuery();

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <LinkUserContainer>
          <LinkUser to="/user">
            <IconUser>
              <use href={sprite + '#iconUser'}></use>
            </IconUser>
            <p>{data.user.name ? data.user.name : ''}</p>
          </LinkUser>
        </LinkUserContainer>
      )}
    </>
  );
};
