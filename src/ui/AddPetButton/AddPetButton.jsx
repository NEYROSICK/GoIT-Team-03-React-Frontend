import {
  AddButton,
  StyledPlusIcon,
  StyledPlusIconSmall,
  AddButtonText,
} from './AddPetButton.styled';
import sprite from '../../ui/Icons/sprite.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const AddPetButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const redirectTo = location.pathname + location.search;

  const handleClick = () => {
    console.log('Sign in to add your own notice.');
    // navigate('/add-pet');
  };

  return (
    <AddButton
      onClick={handleClick}
      to={'/add-pet'}
      state={{ from: redirectTo }}
    >
      <StyledPlusIcon>
        <use href={sprite + '#iconPlus'}></use>
      </StyledPlusIcon>
      <AddButtonText>Add Pet</AddButtonText>
      <StyledPlusIconSmall>
        <use href={sprite + '#iconPlusSmall'}></use>
      </StyledPlusIconSmall>
    </AddButton>
  );
};

export default AddPetButton;
