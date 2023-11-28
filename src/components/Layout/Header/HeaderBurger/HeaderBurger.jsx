import { BurgerButton, BurgerIcon } from './HeaderBurger.styled';
import sprite from '../../../../ui/Icons/sprite.svg';

export const HeaderBurger = ({ toggleModal, isModalOpen }) => {
  return (
    <>
      <BurgerButton
        onClick={() => {
          toggleModal();
        }}
      >
        <BurgerIcon>
          <use
            href={
              sprite + `#${isModalOpen ? 'iconCross' : 'iconMenuHamburger'}`
            }
          ></use>
        </BurgerIcon>
      </BurgerButton>
    </>
  );
};
