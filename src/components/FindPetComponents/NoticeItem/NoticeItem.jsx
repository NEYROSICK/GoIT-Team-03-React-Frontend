import { useRef, Suspense } from 'react';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import {
  ItemContainer,
  TopPart,
  ItemCatogory,
  ItemFavoriteBtn,
} from './NoticeItem.styled';

const NoticeItem = () => {
  return (
    <ItemContainer>
      <TopPart
        imgUrl={
          'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'
        }
      >
        <ItemCatogory>CATEGORY</ItemCatogory>

        <ItemFavoriteBtn />
      </TopPart>
    </ItemContainer>
  );
};

export default NoticeItem;
