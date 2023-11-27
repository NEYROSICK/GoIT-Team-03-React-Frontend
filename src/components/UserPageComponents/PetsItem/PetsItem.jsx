import {
  PetsItemli,
  PetsCardText,
  PetsCardImg,
  BtnDelite,
  TrashSvg,
} from './PetsItem.styled';
import sprite from '.././../../ui/Icons/sprite.svg';
import { useDeletePetMutation } from '../../../redux/API/RTKQueryApi';

function PetsItem({ pets }) {
  const [deletePets] = useDeletePetMutation();
  const hendleDelete = async (id) => {
    await deletePets(id).unwrap();
  };
  return (
    <PetsItemli>
      <BtnDelite onClick={() => hendleDelete(pets._id)}>
        <TrashSvg>
          <use href={sprite + '#iconTrash'}></use>
        </TrashSvg>
      </BtnDelite>
      <PetsCardImg src={pets.avatarURL} alt="user-pet" />
      <ul>
        <PetsCardText>
          <h3>Name: </h3>
          <p>{pets.name}</p>
        </PetsCardText>
        <PetsCardText>
          <h3>Date of birth: </h3>
          <p>{pets.date}</p>
        </PetsCardText>
        <PetsCardText>
          <h3>Type: </h3>
          <p>{pets.type}</p>
        </PetsCardText>
        <PetsCardText>
          <h3> Comments: </h3>
          <p>{pets.comments}</p>
        </PetsCardText>
      </ul>
    </PetsItemli>
  );

}

export default PetsItem;
