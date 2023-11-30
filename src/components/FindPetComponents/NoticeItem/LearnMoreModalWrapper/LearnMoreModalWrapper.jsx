import {
  LearnMoreWrapper,
  LearnMoreImgWrapper,
  LearnMoreImg,
  ItemCategory,
  LearnMoreDataWrapper,
  LearnMoreTitle,
  LearnMoreDataItem,
  LearnMoreDataLeft,
  LearnMoreDataRight,
  LearnMoreDataLink,
  LearnMoreComment,
  LearnMoreBtsWrapper,
  LearnMoreContactBtn,
  LearnMoreContactBtnText,
  LearnMoreAddFvrtBtn,
  LearnMoreAddFvrtBtnText,
  LearnMoreAddFvrtBtnIcon,
  DeleteIcon,
} from './LearnMoreModalWrapper.styled';
import { useGetOneNoticeQuery } from '../../../../redux/API/RTKQueryApi';

const LearnMoreModalWrapper = ({
  _id,
  sprite,
  isFavorite,
  handleFavoriteClick,
  category,
  setShowModal,
}) => {
  const { data, isLoading, error } = useGetOneNoticeQuery(_id);

  return (
    <LearnMoreWrapper>
      {isLoading && <div>Loading...</div>}
      {data?.notice && data?.owner && (
        <>
          <DeleteIcon
            onClick={() => {
              setShowModal(false);
            }}
          >
            <use href={sprite + '#iconCross'} />
          </DeleteIcon>
          <LearnMoreImgWrapper>
            <LearnMoreImg src={data.notice.avatarURL} />
            <ItemCategory>{category}</ItemCategory>
          </LearnMoreImgWrapper>

          <LearnMoreDataWrapper>
            <LearnMoreTitle>{data.notice.title}</LearnMoreTitle>

            <LearnMoreDataItem>
              <LearnMoreDataLeft>Name:</LearnMoreDataLeft>
              <LearnMoreDataRight>{data.notice.name}</LearnMoreDataRight>
            </LearnMoreDataItem>
            <LearnMoreDataItem>
              <LearnMoreDataLeft>Birthday:</LearnMoreDataLeft>
              <LearnMoreDataRight>{data.notice.date}</LearnMoreDataRight>
            </LearnMoreDataItem>
            <LearnMoreDataItem>
              <LearnMoreDataLeft>Type:</LearnMoreDataLeft>
              <LearnMoreDataRight>{data.notice.type}</LearnMoreDataRight>
            </LearnMoreDataItem>
            <LearnMoreDataItem>
              <LearnMoreDataLeft>Place:</LearnMoreDataLeft>
              <LearnMoreDataRight>{data.notice.location}</LearnMoreDataRight>
            </LearnMoreDataItem>
            <LearnMoreDataItem>
              <LearnMoreDataLeft>The sex:</LearnMoreDataLeft>
              <LearnMoreDataRight>{data.notice.sex}</LearnMoreDataRight>
            </LearnMoreDataItem>
            <LearnMoreDataItem>
              <LearnMoreDataLeft>Email:</LearnMoreDataLeft>
              <LearnMoreDataLink
                href={`mailto:${data.owner && data.owner.email}`}
              >
                {data.owner && data.owner.email}
              </LearnMoreDataLink>
            </LearnMoreDataItem>
            <LearnMoreDataItem>
              <LearnMoreDataLeft>Phone:</LearnMoreDataLeft>
              <LearnMoreDataLink href={`tel:${data.owner && data.owner.phone}`}>
                {data.owner && data.owner.phone}
              </LearnMoreDataLink>
            </LearnMoreDataItem>
          </LearnMoreDataWrapper>
          <LearnMoreComment>Comments: {data.notice.comments}</LearnMoreComment>
          <LearnMoreBtsWrapper>
            <LearnMoreContactBtn href={`tel:${data.owner && data.owner.phone}`}>
              <LearnMoreContactBtnText>Contact</LearnMoreContactBtnText>
            </LearnMoreContactBtn>
            <LearnMoreAddFvrtBtn onClick={handleFavoriteClick}>
              <LearnMoreAddFvrtBtnText>
                Add to
                <LearnMoreAddFvrtBtnIcon isFavorite={isFavorite}>
                  <use href={sprite + '#iconHeart'} />
                </LearnMoreAddFvrtBtnIcon>
              </LearnMoreAddFvrtBtnText>
            </LearnMoreAddFvrtBtn>
          </LearnMoreBtsWrapper>
        </>
      )}
      {error && <div>{error.message}</div>}
    </LearnMoreWrapper>
  );
};

export default LearnMoreModalWrapper;
