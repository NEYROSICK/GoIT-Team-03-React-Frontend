import { useRef, Suspense } from 'react';
import sprite from '../../../ui/Icons/sprite.svg';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import {
  ItemContainer,
  TopPart,
  ItemCatogory,
  ItemFavoriteBtn,
  FavoriteIcon,
} from './NoticeItem.styled';

const NoticeItem = ({id, category, location, age, sex, title}) => {
  return (
    <ItemContainer key={id}>
      <TopPart
        imgUrl={
          'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'
        }
      >
        <ItemCatogory>{category}</ItemCatogory>

        <ItemFavoriteBtn>
          <FavoriteIcon>
            <use href={sprite + '#iconHeart'} />
          </FavoriteIcon>
        </ItemFavoriteBtn>
      </TopPart>
    </ItemContainer>
  );
};

export default NoticeItem;
