import {
  AttentionWrapper,
  AttentionTitle,
  AttentionText,
  AttentionIcon,
} from './AttentionModalWrapper.styled.js';

import AttentionBtns from '../../AttentionBtns/AttentionBtns.jsx';

const AttentionModalWrapper = ({ setShowModal, sprite }) => {
  return (
    <AttentionWrapper>
      <AttentionIcon
        onClick={() => {
          setShowModal(false);
        }}
      >
        <use href={sprite + '#iconCross'} />
      </AttentionIcon>
      <AttentionTitle>Attention</AttentionTitle>
      <AttentionText>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </AttentionText>
      <AttentionBtns />
    </AttentionWrapper>
  );
};

export default AttentionModalWrapper;
