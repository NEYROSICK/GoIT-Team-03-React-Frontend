import { NoNoticesFoundIcon } from '../../ui/NoMatches/AllNotices.styled';
import sprite from '../../ui/Icons/sprite.svg';

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
        <PageTitle>
          <NoNoticesFoundIcon>
            <use href={sprite + '#iconPaw'} />
          </NoNoticesFoundIcon>{' '}
          Our friends{' '}
          <NoNoticesFoundIcon>
            <use href={sprite + '#iconPaw'} />
          </NoNoticesFoundIcon>
        </PageTitle>
        <FriendItem />
      </Container>
    </OurFriendsContainer>
  );
}

export default FriendsPage;
