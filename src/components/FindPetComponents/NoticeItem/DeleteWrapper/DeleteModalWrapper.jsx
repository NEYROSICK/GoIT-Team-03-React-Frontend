import {
  DeleteWrapper,
  DeleteIcon,
  DeleteTitle,
  DeleteText,
  DeleteCancelBtn,
  DeleteCancelBtnText,
  DeleteYesBtn,
  DeleteYesBtnText,
  DeleteYesIcon,
} from './DeleteModalWrapper.styled.jsx';

const DeleteModalWrapper = ({ setShowModal, sprite, handleDeleteClick }) => {
  return (
    <DeleteWrapper>
      <DeleteIcon
        onClick={() => {
          setShowModal(false);
        }}
      >
        <use href={sprite + '#iconCross'} />
      </DeleteIcon>
      <DeleteTitle>Delete adverstiment?</DeleteTitle>
      <DeleteText>
        Are you sure you want to delete <b>“Cute dog looking for a home”</b>?
        You can`t undo this action.
      </DeleteText>
      <DeleteCancelBtn>
        <DeleteCancelBtnText>Cancel</DeleteCancelBtnText>
      </DeleteCancelBtn>
      <DeleteYesBtn>
        <DeleteYesBtnText>
          Yes
          <DeleteYesIcon type="submit" onClick={handleDeleteClick}>
            <use href={sprite + '#iconTrash'} />
          </DeleteYesIcon>
        </DeleteYesBtnText>
      </DeleteYesBtn>
    </DeleteWrapper>
  );
};

export default DeleteModalWrapper;
