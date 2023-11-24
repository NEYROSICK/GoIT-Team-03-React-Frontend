import styled from '@emotion/styled';
import '../../../index.css';
import { NavLink } from 'react-router-dom';

const ItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  border-radius: 0px 0px 40px 40px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  width: 280px;
  height: 456px;
`;

const TopPart = styled.div`
  background-image: ${(props) => {
    return `url(${props.imgUrl})`;
  }};
  background-color: #fff;
  background-size: cover;

  width: 280px;
  height: 288px;
  padding: 12px 0;
`;

const ItemCatogory = styled.p`
  position: absolute;
  top: 16px;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0px 16px 16px 0px;
  background: var(--clr-brand-blue-lt);

  padding: 11px 17px;
`;

const ItemFavoriteBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  background: var(--clr-brand-blue-lt);

  padding: 9px 8px 7px 8px;
`;

const FavoriteIcon = styled.svg`
  stroke: var(--clr-brand-blue);
  fill: none;
  width: 20px;
  height: 20px;
`;

// const FavoriteBtn = styled.

//? --clr-brand-blue лінк колор

export { ItemContainer, TopPart, ItemCatogory, ItemFavoriteBtn, FavoriteIcon };
