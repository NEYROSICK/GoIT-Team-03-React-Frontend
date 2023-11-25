import sprite from '../../../ui/Icons/sprite.svg';

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
} from './NoticeItem.styled';
import { useUpdateFavoriteMutation } from '../../../redux/API/UserApi';
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
}) => {
  const [updateFavorite] = useUpdateFavoriteMutation();

  const [message, setMessage] = useState('');

  const handleFavoriteClick = async (e) => {
    e.preventDefault();

    try {
      const response = await updateFavorite(id);
      if (response.data && response.data.message) {
        setMessage(response.data.message);
      }
      console.log(message);
    } catch (error) {
      setMessage('Failed to update favorite status');
    }
  };

  const today = new Date();

  const noticeDate = new Date(date);

  const noticeAge = today.getFullYear() - noticeDate.getFullYear();

  const ageText = noticeAge % 2 ? 'year' : 'years';

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
            female
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
