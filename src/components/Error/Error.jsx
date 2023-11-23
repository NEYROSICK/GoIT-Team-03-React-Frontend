import Desktop1x from '../../images/404Desktop.png';
import Desktop2x from '../../images/404Desktop@2x.png';
import Tablet1x from '../../images/404Tablet.png'
import Tablet2x from '../../images/404Tablet@2x.png';
import Mobile1x from '../../images/404Mobile.png';
import Mobile2x from '../../images/404Mobile@2x.png';
import {  ErrorH2, ErrorIcon, ErrorLink, ErrorPicture } from './Error.styled';
import { ReactComponent as Icon } from '../../images/error_paw.svg';

export const Error = () => {
  return (
    <div>
      <ErrorH2>Ooops! This page not found :( </ErrorH2>

      <ErrorPicture>
        <source
          srcSet={`${Desktop1x} 1x, ${Desktop2x} 2x`}
          media="(min-width: 1200px)"
        />
        <source
          srcSet={`${Tablet1x} 1x, ${Tablet2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${Mobile1x} 1x, ${Mobile2x} 2x`}
          media="(max-width: 767px)"
        />
        <img src={Desktop2x} alt="404_Error" />
      </ErrorPicture>

      <ErrorLink to="./main">
        To main page
        <ErrorIcon as={Icon} />
      </ErrorLink>
    </div>
  );
};
