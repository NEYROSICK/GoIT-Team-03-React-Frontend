import sprite from '../../../ui/Icons/sprite.svg';

import {
  ItemContainer,
  TopPart,
  ItemImg,
  ItemCatogory,
  ItemFavoriteBtn,
  FavoriteIcon,
  ItemDataWrapper,
  ItemData,
  ItemDataIcon,
  ItemTitle,
  ItemLearnMoreBtn,
  ItemLearnMoreBtnIcon,
} from './NoticeItem.styled';

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
  const today = new Date();

  const noticeDate = new Date(date);

  const noticeAge = today.getFullYear() - noticeDate.getFullYear();

  const ageText = noticeAge % 2 ? 'year' : 'years';

  return (
    <ItemContainer key={id}>
      <TopPart>
        <ItemImg src={avatarUrl} />
        <ItemCatogory>{category}</ItemCatogory>

        <ItemFavoriteBtn>
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
