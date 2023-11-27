
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


// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Modal from '../../../../Modal/Modal';
// import sprite from '../../../../../ui/Icons/sprite.svg';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../../../../../redux/auth/operations';

// import {
//   UserNavStyledDiv,
//   LinkUser,
//   IconUser,
//   IconLogOut,
// } from './UserNavStyled';

// export const UserNav = () => {
//   const [isShowModal, setIsShowModal] = useState(false);
//   const dispatch = useDispatch();

//   const hendleClick = () => {
//     setIsShowModal(true);
//   };

//   const hendleLogout = () => {
//     dispatch(logOut()); 
//     navigate('/login'); 
//     localStorage.removeItem("persist:auth");
    
//   };

//   return (
//     <UserNavStyledDiv>
//       <LogoutButton onClick={hendleClick} />
//       <LinkUser to="/user">
//         <IconUser>
//           <use href={sprite + '#iconUser'}></use>
//         </IconUser>
//       </LinkUser>

//       {isShowModal && (
//         <Modal isOpen={setIsShowModal}>
//         </Modal>
//       )}
//     </UserNavStyledDiv>
//   );
// };

