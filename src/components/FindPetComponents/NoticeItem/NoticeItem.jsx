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
import { useUpdateFavoriteMutation } from '../../../redux/API/UserApi';
import { useDeleteNoticeMutation } from '../../../redux/API/noticesApi';
import { useState } from 'react';

const NoticeItem = ({
  id,
  title,
  date,
  category,
  sex,
  location,
  avatarUrl,
  isFavorite,
  showDelete,
}) => {
  const [updateFavorite] = useUpdateFavoriteMutation();

  const [deleteNotice] = useDeleteNoticeMutation();

  const [message, setMessage] = useState('');

  const today = new Date();

  const noticeDate = new Date(date);

  const noticeAge = today.getFullYear() - noticeDate.getFullYear();

  const ageText = noticeAge % 2 ? 'year' : 'years';

  const handleFavoriteClick = async (e) => {
    e.preventDefault();

    try {
      const response = await updateFavorite(id);
      if (response.data && response.data.message) {
        await setMessage(response.data.message);
      }
      Notify.success(message);
    } catch (error) {
      setMessage('Failed to update favorite status');
      Notify.failure(message);
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
          <ItemDeleteBtn type="submit" onClick={handleDeleteClick}>
            <FavoriteIcon isFavorite={isFavorite}>
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
      <ItemLearnMoreBtn>
        Learn more
        <ItemLearnMoreBtnIcon>
          <use href={sprite + '#iconPaw'} />
        </ItemLearnMoreBtnIcon>
      </ItemLearnMoreBtn>
    </ItemContainer>
  );
};

export default NoticeItem;
