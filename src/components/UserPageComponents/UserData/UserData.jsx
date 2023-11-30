import UserForm from '../UserForm/UserForm';
import Modal from '../../Modal/Modal';

import {
  UserPageItem,
  UserFormTitle,
  UserFormBox,
  UserBtnPen,
  ModalTitle,
  ModalText,
  ModalBtn,
  ModalConteiner,
  BtnCloseModal,
  PenSvg,
  CloseEdit,
  PawSvg,
  CloseSvg,
} from './UserData.styled';

import { useState, useEffect } from 'react';
import sprite from '../../../ui/Icons/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsNewUser } from '../../../redux/auth/authSlice';
import { selectIsNewUser } from '../../../redux/auth/selectors';

const UserData = () => {
  const dispatch = useDispatch();
  const isNewUser = useSelector(selectIsNewUser);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        dispatch(changeIsNewUser(false));
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [dispatch]);

  const [isUserUpdate, setIsUserUpdate] = useState(true);

  const handleModalClose = () => {
    dispatch(changeIsNewUser(false));
  };

  return (
    <>
      <UserPageItem>
        <UserFormTitle>My information:</UserFormTitle>
        <UserFormBox>
          {isUserUpdate ? (
            <UserBtnPen onClick={() => setIsUserUpdate((state) => !state)}>
              <PenSvg>
                <use href={sprite + '#iconEdit'}></use>
              </PenSvg>
            </UserBtnPen>
          ) : (
            <UserBtnPen onClick={() => setIsUserUpdate((state) => !state)}>
              <CloseEdit>
                <use href={sprite + '#iconCross'}></use>
              </CloseEdit>
            </UserBtnPen>
          )}

          <UserForm
            isUserUpdate={isUserUpdate}
            setIsUserUpdate={setIsUserUpdate}
          />

          {isNewUser && (
            <Modal>
              <ModalConteiner>
                <ModalTitle>Congrats!</ModalTitle>
                <ModalText>Youre registration is success</ModalText>
                <ModalBtn
                  onClick={() => {
                    handleModalClose();
                  }}
                  type="button"
                >
                  Go to profile
                  <PawSvg>
                    <use href={sprite + '#iconPaw'}></use>
                  </PawSvg>
                </ModalBtn>
                <BtnCloseModal
                  onClick={() => {
                    handleModalClose();
                  }}
                >
                  <CloseSvg>
                    <use href={sprite + '#iconCross'}></use>
                  </CloseSvg>
                </BtnCloseModal>
              </ModalConteiner>
            </Modal>
          )}
        </UserFormBox>
      </UserPageItem>
    </>
  );
};

export default UserData;
