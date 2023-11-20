import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/authSelectors";
import { EmptyPetsList } from "../EmptyPetsList/EmptyPetsList";
import { Pagination } from "../../../Pagination/Pagination";
import {
  PetsList,
  PetsCardContainer,
  PetsCardText,
  PetsCardImg,
  PetsCardIcon,
} from "./PetsData.styled";

export const PetsData = () => {
  const user = useSelector(selectUser);
  const pets = user?.pets;

  const [page, setPage] = useState(1);
  const [currentPets, setCurrentPets] = useState([]);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  useEffect(() => {
    if (pets) {
      const startIndex = (page - 1) * 2;
      const endIndex = startIndex + 2;
      const petsSlice = pets.slice(startIndex, endIndex);
      setCurrentPets(petsSlice);
    }
  }, [page, pets]);

  return (
    <>
      <PetsList>
        {currentPets.map((el) => (
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

      {pets?.length === 0 && <EmptyPetsList />}

      <Pagination
        onPageChange={handlePageChange}
        currentPage={page}
        perPage={2}
        totalItems={pets?.length}
      />
    </>
  );
};
