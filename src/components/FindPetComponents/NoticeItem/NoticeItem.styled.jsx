import styled from '@emotion/styled';
import '../../../index.css';
import { NavLink } from 'react-router-dom';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 0px 0px 40px 40px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  width: 280px;
  height: 456px;
`;

const TopPart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;

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

  padding: 6.5px 12.98px;

  color: #111;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ItemFavoriteBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--clr-brand-blue-lt);
  border-radius: 100%;
  border: none;
  outline: none;

  padding: 9px 8px 7px 8px;
`;

const FavoriteIcon = styled.svg`
  stroke: var(--clr-brand-blue);
  fill: ${(props) => {
    return props.isFavorite ? '--clr-brand-blue' : 'none';
  }};

  width: 24px;
  height: 24px;
`;

const ItemDataWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 280px;
  height: 30px;
  background-color: #888888;

  z-index: 2;
`;

const ItemData = styled.p`
  color: var(--, #111);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
`;

const ItemDataIcon = styled.svg`
  stroke: var(--clr-brand-blue);
  fill: none;

  width: 24px;
  height: 24px;
`;

export {
  ItemContainer,
  TopPart,
  ItemCatogory,
  ItemFavoriteBtn,
  FavoriteIcon,
  ItemDataWrapper,
  ItemData,
  ItemDataIcon,
};
