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
import sprite from '.././../../ui/Icons/sprite.svg'

const UserData = () => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setIsModal(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  const [isUserUpdate, setIsUserUpdate] = useState(true);
  const [isModal, setIsModal] = useState(true);

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

          {isModal && (
            <Modal>
              <ModalConteiner>
                <ModalTitle>Congrats!</ModalTitle>
                <ModalText>Youre registration is success</ModalText>
                <ModalBtn onClick={() => setIsModal(false)} type="button">
                  Go to profile
                  <PawSvg>
                  <use href={sprite + '#iconPaw'}></use>
                  </PawSvg>
                </ModalBtn>
                <BtnCloseModal onClick={() => setIsModal(false)}>
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
