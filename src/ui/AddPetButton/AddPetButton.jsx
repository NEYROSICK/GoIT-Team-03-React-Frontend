import {
  AddButton,
  StyledPlusIcon,
  StyledPlusIconSmall,
  AddButtonText,
} from './AddPetButton.styled';
import sprite from '../../ui/Icons/sprite.svg';
const AddPetButton = () => {
  const handleClick = () => {
    console.log('Sign in to add your own notice.');
  };
  return (
    <AddButton onClick={handleClick} to={'/add-pet'}>
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
