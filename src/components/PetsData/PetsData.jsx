import { useState } from "react";

import {
    PetsList,
    PetsCardContainer,
    PetsCardText,
    PetsCardImg,
    PetsDataTitle,
    ConteinerTitle,
    BtnAddPet,
} from "./PetsData.styled";

import { EmptyPetsList } from "../EmptyPetsList/EmptyPetsList";

export const PetsData = () => {

    const [currentPets, setCurrentPets] = useState([{ name: 'Jack', date: '22.04.2018', type: 'Persian cat', comments: "Jack is a gray Persian cat with green eyes.He loves to be pampered and groomed, and enjoys playing with toys.Although a bitshy, he's a loyal and affectionate lap cat", file: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutFe12GiEdUvTno_bjd-8KnM0m2TaQwst9zoV6vjJG5HDkg065mCUGW7SSUBkcYgRAhc&usqp=CAU' },
        {
            name: 'Jack', date: '22.04.2018', type: 'Persian cat', comments: "Jack is a gray Persian cat with green eyes.He loves to be pampered and groomed, and enjoys playing with toys.Although a bitshy, he's a loyal and affectionate lap cat", file: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403'
        }]);


    return (
        <div>
            <ConteinerTitle>
            <PetsDataTitle>My pets:</PetsDataTitle>
            <BtnAddPet>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 20V12M12 12V4M12 12H20M12 12H4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Add pet
            </BtnAddPet>
            </ConteinerTitle>
            <PetsList  >
                {currentPets && currentPets.map((el) => (
                    <PetsCardContainer key={el._id}>
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