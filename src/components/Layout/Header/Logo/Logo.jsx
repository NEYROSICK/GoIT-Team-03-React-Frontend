import { LogoIcon, LogoLink } from './Logo.Styled';
import sprite from '../../../../ui/Icons/sprite.svg';

export const Logo = ({ onClose }) => {
  return (
    <>
      <LogoLink
        to="/main"
        onClick={() => {
          onClose(false);
        }}
      >
        <LogoIcon>
          <use href={sprite + '#icon-logo'}></use>
        </LogoIcon>
      </LogoLink>
    </>
  );
};
