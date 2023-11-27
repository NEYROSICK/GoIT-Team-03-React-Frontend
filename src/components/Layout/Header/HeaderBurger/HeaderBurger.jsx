
import React, { useState } from 'react';
import { BurgerButton, BurgerIcon } from './HeaderBurger.Styled';
import sprite from '../../../../ui/Icons/sprite.svg';
import { ModalBurger } from './ModalBurger';

export const HeaderBurger = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <BurgerButton onClick={toggleModal}>
        <BurgerIcon>
          <use
            href={
              sprite +
              `#${isModalOpen ? 'iconCross' : 'iconMenuHamburger'}`
            }
          ></use>
        </BurgerIcon>
      </BurgerButton>
      {isModalOpen && <ModalBurger onClose={toggleModal} />}
    </>
  );
};





// import { BurgerButton, BurgerIcon } from './HeaderBurger.Styled';
// import sprite from '../../../../ui/Icons/sprite.svg';



// export const HeaderBurger = () => {
//     return (
//       <BurgerButton>
//         <BurgerIcon>
//           <use href={sprite + '#iconMenuHamburger'}></use>
//         </BurgerIcon>
//       </BurgerButton>
//     );
// };







