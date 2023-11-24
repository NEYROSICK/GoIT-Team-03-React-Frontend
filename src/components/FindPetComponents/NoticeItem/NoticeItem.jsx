import { useRef, Suspense } from 'react';
import sprite from '../../../ui/Icons/sprite.svg';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import {
  ItemContainer,
  TopPart,
  ItemCatogory,
  ItemFavoriteBtn,
  FavoriteIcon,
  ItemDataWrapper,
  ItemData,
  ItemDataIcon,
} from './NoticeItem.styled';

const NoticeItem = ({
  id,
  category,
  location,
  age,
  sex,
  title,
  isFavorite,
}) => {
  return (
    <ItemContainer key={id}>
      <TopPart
        imgUrl={
          'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'
        }
      >
        <ItemCatogory>In good hands</ItemCatogory>

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
            Lviv
          </ItemData>
          <ItemData>
            <ItemDataIcon>
              <use href={sprite + '#iconClock'} />
            </ItemDataIcon>
            1 year
          </ItemData>
          <ItemData>
            <ItemDataIcon>
              <use
                href={
                  sex === 'male' ? sprite + '#iconMale' : sprite + '#iconFemale'
                }
              />
              {/* sprite + '#iconFemale' */}
              {/* iconMale */}
            </ItemDataIcon>
            female
          </ItemData>
        </ItemDataWrapper>
      </TopPart>
    </ItemContainer>
  );
};

export default NoticeItem;
