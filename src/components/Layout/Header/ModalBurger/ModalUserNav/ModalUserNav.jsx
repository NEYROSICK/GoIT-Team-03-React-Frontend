import sprite from '../../../../../ui/Icons/sprite.svg';
import { useGetMeAndPetsQuery } from '../../../../../redux/API/RTKQueryApi';
import { LinkUser, IconUser, LinkUserContainer } from '../ModalBurger.styled';

export const ModalUserNav = ({ onClose }) => {
  const { data, isLoading } = useGetMeAndPetsQuery();

  const handleClick = () => {
    onClose(false);
  };

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <LinkUserContainer>
          <LinkUser
            to="/user"
            onClick={() => {
              handleClick();
            }}
          >
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
