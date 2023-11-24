import { useState } from "react";

import {
    PetsList,
    PetsCardContainer,
    PetsCardText,
    PetsCardImg,
    PetsDataTitle,
    ConteinerTitle,
    BtnAddPet,
    BtnDelite,
    // TrashSvg,
    PlussSvg,
} from "./PetsData.styled";
import sprite from '.././../../ui/Icons/sprite.svg'

import { EmptyPetsList } from "../EmptyPetsList/EmptyPetsList";

export const PetsData = () => {

    const [currentPets, setCurrentPets] = useState([{ id:1, name: 'Jack', date: '22.04.2018', type: 'Persian cat', comments: "Jack is a gray Persian cat with green eyes.He loves to be pampered and groomed, and enjoys playing with toys.Although a bitshy, he's a loyal and affectionate lap cat", file: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutFe12GiEdUvTno_bjd-8KnM0m2TaQwst9zoV6vjJG5HDkg065mCUGW7SSUBkcYgRAhc&usqp=CAU' },
        {
            id:2, name: 'Jack', date: '22.04.2018', type: 'Persian cat', comments: "Jack is a gray Persian cat with green eyes.He loves to be pampered and groomed, and enjoys playing with toys.Although a bitshy, he's a loyal and affectionate lap cat", file: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403'
        }]);
    const hendleDelete =(e)=> {
    console.log(e)
    }

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
                {currentPets && currentPets.map((el) => (
                    <PetsCardContainer key={el.id}>
                        <BtnDelite   onClick={()=>hendleDelete(el.id)}>
                        {/* <TrashSvg>
                        <use href={sprite + '#iconTrash'}></use>
                        </TrashSvg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20M10 10V16M14 10V16" stroke="#54ADFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </BtnDelite>
                        <PetsCardImg src={el.file} alt="default" />
                        <ul>
                            <PetsCardText>
                                <h3>Name: </h3>
                                <p>{el.name}</p>
                            </PetsCardText>
                            <PetsCardText>
                                <h3>Date of birth: </h3>
                                <p>{el.date}</p>
                            </PetsCardText>
                            <PetsCardText>
                                <h3>Type: </h3>
                                <p>{el.type}</p>
                            </PetsCardText>
                            <PetsCardText>
                                <h3> Comments: </h3>
                                <p>{el.comments}</p>
                            </PetsCardText>
                        </ul>
                    </PetsCardContainer>
                ))}
            </PetsList>

            {currentPets?.length === 0 && <EmptyPetsList />}
        </div>
    );
};