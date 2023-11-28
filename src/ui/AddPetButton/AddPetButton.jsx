import {
  AddButton,
  StyledPlusIcon,
  StyledPlusIconSmall,
  AddButtonText,
} from './AddPetButton.styled';
import sprite from '../../ui/Icons/sprite.svg';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/auth/selectors.jsx';

import FindPetModal from '../../components/FindPetComponents/FindPetModal/FindPetModal.jsx';
import AttentionModalWrapper from '../../components/FindPetComponents/NoticeItem/AttentionWrapper/AttentionModalWrapper.jsx';

const AddPetButton = () => {
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleClick = () => {
    if (!isAuthenticated) {
      setShowModal(true);
      return;
    }
    navigate('/add-pet', { state: { from: location } });
  };

  return (
    <>
      <AddButton onClick={handleClick}>
        <StyledPlusIcon>
          <use href={sprite + '#iconPlus'}></use>
        </StyledPlusIcon>
        <AddButtonText>Add Pet</AddButtonText>
        <StyledPlusIconSmall>
          <use href={sprite + '#iconPlusSmall'}></use>
        </StyledPlusIconSmall>
      </AddButton>

      {showModal && (
        <FindPetModal
          onClose={() => {
            setShowModal(false);
          }}
          showModal={showModal}
        >
          <AttentionModalWrapper setShowModal={setShowModal} sprite={sprite} />
        </FindPetModal>
      )}
    </>
  );
};

export default AddPetButton;
