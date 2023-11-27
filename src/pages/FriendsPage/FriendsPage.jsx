import {
  Container,
  PageTitle,
  OurFriendsContainer,
} from './FriendsPage.styled';
import FriendItem from '../../components/FriendsItem/FriendsItem';

function FriendsPage() {
  return (
    <OurFriendsContainer>
      <Container>
        <PageTitle>Our Friends</PageTitle>
        <FriendItem />
      </Container>
    </OurFriendsContainer>
  );
}

export default FriendsPage;
