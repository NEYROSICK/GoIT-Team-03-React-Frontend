import { Link } from 'react-router-dom';
import { LogoIcon, LogoLink } from './Logo.styled';
import sprite from '../../../../ui/Icons/sprite.svg';

export const Logo = () => {
  return (
    <>
      <LogoLink to="/main">
        <LogoIcon>
          <use href={sprite + '#icon-logo'}></use>
        </LogoIcon>
      </LogoLink>
    </>
  );
};
