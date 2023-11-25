import {
    PetsList,
    PetsDataTitle,
    ConteinerTitle,
    BtnAddPet,
    PlussSvg,
} from "./PetsData.styled";

import { useGetUserQuery} from '../../../redux/API/UserApi'
import { EmptyPetsList } from "../EmptyPetsList/EmptyPetsList";
import  PetsItem  from "../PetsItem/PetsItem";
import sprite from '.././../../ui/Icons/sprite.svg'

export const PetsData = () => {

    const { data=[] } = useGetUserQuery();
    console.log(data)
    return (
        <div>
            <ConteinerTitle>
            <PetsDataTitle>My pets:</PetsDataTitle>
            <BtnAddPet to={'/add-pet'}>
            <PlussSvg>
            <use href={sprite + '#iconPlusSmall'}></use>
            </PlussSvg>
            Add pet
            </BtnAddPet>
            </ConteinerTitle>
            <PetsList  >
                {data.pets && data.pets?.map((el) => (
                <PetsItem key={el._id} pets={el} />
                ))}
            </PetsList>
            {data.pets?.length === 0 && <EmptyPetsList />}
        </div>
    );
};