import { Link } from 'react-router-dom';
import { LogoIcon } from './Logo.Styled';
import sprite from '../../../../ui/Icons/sprite.svg';

export const Logo = () => {
  return (
    <>
      <Link to="/main">
        <LogoIcon>
          <use href={sprite + '#icon-logo'}></use>
        </LogoIcon>
      </Link>
    </>
  );
};
