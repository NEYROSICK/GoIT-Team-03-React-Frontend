import sprite from '../../../ui/Icons/sprite.svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  ItemContainer,
  TopPart,
  ItemImg,
  ItemCategory,
  ItemFavoriteBtn,
  FavoriteIcon,
  ItemDataWrapper,
  ItemData,
  ItemDataIcon,
  ItemTitle,
  ItemLearnMoreBtn,
  ItemLearnMoreBtnIcon,
  ItemDeleteBtn,
} from './NoticeItem.styled';

import { useUpdateFavoriteMutation } from '../../../redux/API/RTKQueryApi';
import { useDeleteNoticeMutation } from '../../../redux/API/RTKQueryApi';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../../redux/auth/selectors.jsx';

// import Modal from '../../Modal/Modal.jsx';
import FindPetModal from '../FindPetModal/FindPetModal.jsx';
import AttentionModalWrapper from './AttentionWrapper/AttentionModalWrapper.jsx';
import DeleteModalWrapper from './DeleteWrapper/DeleteModalWrapper.jsx';

const NoticeItem = ({
  id,
  title,
  date,
  category,
  sex,
  location,
  avatarUrl,
  userFavoritesArr,
  showDelete,
}) => {
  // const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const [isFavorite, setIsFavorite] = useState(userFavoritesArr.includes(id));

  const [updateFavorite] = useUpdateFavoriteMutation();

  const [deleteNotice] = useDeleteNoticeMutation();

  const today = new Date();

  const noticeDate = new Date(date);

  const noticeAge = today.getFullYear() - noticeDate.getFullYear();

  const ageText = noticeAge % 2 ? 'year' : 'years';

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const handleFavoriteClick = async (e) => {
    e.preventDefault();

    if (isAuthenticated) {
      try {
        const response = await updateFavorite(id);
        if (response.data && response.data.message) {
          Notify.success('Success!');
        }
        setIsFavorite((prevState) => !prevState);
      } catch (error) {
        Notify.failure('Failed to update favorite status');
      }
    } else {
      setModalType('attention');
      toggleModal();
    }
  };

  const handleDeleteClick = async (e) => {
    e.preventDefault();

    try {
      const response = await deleteNotice(id);
      if (response.data) {
        Notify.success(response.data.name + ' was deleted successfully');
      }
    } catch (error) {
      Notify.failure('Failed to delete notice');
    }
    toggleModal();
  };

  const handleDeleteBtnClick = () => {
    setModalType('delete');
    toggleModal();
  };

  const handleLearnMoreClick = () => {
    setModalType('learnmore');
    toggleModal();
  };

  return (
    <ItemContainer key={id}>
      <TopPart>
        <ItemImg src={avatarUrl} />
        <ItemCategory>{category}</ItemCategory>

        <ItemFavoriteBtn type="submit" onClick={handleFavoriteClick}>
          <FavoriteIcon isFavorite={isFavorite}>
            <use href={sprite + '#iconHeart'} />
          </FavoriteIcon>
        </ItemFavoriteBtn>

        {showDelete && (
          <ItemDeleteBtn onClick={handleDeleteBtnClick}>
            <FavoriteIcon>
              <use href={sprite + '#iconTrash'} />
            </FavoriteIcon>
          </ItemDeleteBtn>
        )}

        <ItemDataWrapper>
          <ItemData>
            <ItemDataIcon>
              <use href={sprite + '#iconLocation'} />
            </ItemDataIcon>
            {location}
          </ItemData>
          <ItemData>
            <ItemDataIcon>
              <use href={sprite + '#iconClock'} />
            </ItemDataIcon>
            {noticeAge} {ageText}
          </ItemData>
          <ItemData>
            <ItemDataIcon>
              <use
                href={
                  sex === 'male' ? sprite + '#iconMale' : sprite + '#iconFemale'
                }
              />
            </ItemDataIcon>
            {sex}
          </ItemData>
        </ItemDataWrapper>
      </TopPart>
      <ItemTitle>{title}</ItemTitle>
      <ItemLearnMoreBtn onClick={handleLearnMoreClick}>
        Learn more
        <ItemLearnMoreBtnIcon>
          <use href={sprite + '#iconPaw'} />
        </ItemLearnMoreBtnIcon>
      </ItemLearnMoreBtn>
      {showModal && (
        <FindPetModal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <AttentionModalWrapper setShowModal={setShowModal} sprite={sprite} />

          {/* <DeleteModalWrapper
            setShowModal={setShowModal}
            sprite={sprite}
            handleDeleteClick={handleDeleteClick}
          /> */}
        </FindPetModal>
      )}
    </ItemContainer>
  );
};

export default NoticeItem;
