import {
  PetsList,
  PetsDataTitle,
  ConteinerTitle,
  BtnAddPet,
  PlussSvg,
} from './PetsData.styled';

import { useGetMeAndPetsQuery } from '../../../redux/API/RTKQueryApi';
import { EmptyPetsList } from '../EmptyPetsList/EmptyPetsList';
import PetsItem from '../PetsItem/PetsItem';
import sprite from '.././../../ui/Icons/sprite.svg';

export const PetsData = () => {
  const { data = [] } = useGetMeAndPetsQuery();
  return (
    <div>
      <ConteinerTitle>
        <PetsDataTitle>My pets:</PetsDataTitle>
        <BtnAddPet to={'/add-pet'} state={{ from: '/user' }}>
          <div>
            Add pet
            <PlussSvg>
              <use href={sprite + '#iconPlusSmall'}></use>
            </PlussSvg>
          </div>
        </BtnAddPet>
      </ConteinerTitle>
      <PetsList>
        {data.pets &&
          data.pets?.map((el) => <PetsItem key={el._id} pets={el} />)}
      </PetsList>
      {data.pets?.length === 0 && <EmptyPetsList />}
    </div>
  );
};
