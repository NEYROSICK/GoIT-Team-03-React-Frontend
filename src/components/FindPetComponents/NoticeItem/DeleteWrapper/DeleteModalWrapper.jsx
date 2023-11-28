import {
  DeleteWrapper,
  DeleteIcon,
  DeleteTitle,
  DeleteText,
  DeleteBtnsWrapper,
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
        <br />
        You can`t undo this action.
      </DeleteText>
      <DeleteBtnsWrapper>
        <DeleteCancelBtn
          onClick={() => {
            setShowModal(false);
          }}
        >
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
      </DeleteBtnsWrapper>
    </DeleteWrapper>
  );
};

export default DeleteModalWrapper;
