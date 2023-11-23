import AddPetForm from '../../components/AddPetForm/AddPetForm';
import sprite from '../../ui/Icons/sprite.svg';
import { ArrowLeft } from './icon.styled';

const AddPetPage = () => {
  return (
    <>
      <AddPetForm />
      <ArrowLeft>
        <use href={sprite + '#iconPawprint'} />
      </ArrowLeft>
    </>
  );
};

export default AddPetPage;
