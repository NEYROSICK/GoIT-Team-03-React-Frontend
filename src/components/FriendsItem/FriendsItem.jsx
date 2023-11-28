import {
  NoNoticesFound,
  NoNoticesFoundIcon,
} from '../../ui/NoMatches/AllNotices.styled';
import sprite from '../../ui/Icons/sprite.svg';
import Loader from '../../ui/Loader/Loader';

import {
  ListFriends,
  ItemFriends,
  TitleFriends,
  ContainerFriends,
  Info,
  FriendsPhoto,
  ListInfo,
} from './FriendsItem.styled';
import { useGetFriendsQuery } from '../../redux/API/RTKQueryApi';

import Dropdown from './Dropdown/Dropdown';
const FriendItem = () => {
  const { data, isLoading } = useGetFriendsQuery();
  return (
    <ListFriends>
      {isLoading && <Loader />}
      {data &&
        data.map((el, index) => (
          <ItemFriends key={index}>
            <TitleFriends>{el.title ? el.title : ''}</TitleFriends>
            <ContainerFriends>
              <FriendsPhoto src={el.imageUrl ? el.imageUrl : ''} alt="" />
              <ListInfo>
                <li>
                  <Dropdown workDays={el.workDays} />
                </li>
                <li>
                  <Info>Address:</Info>
                  <a href={el.addressUrl ? el.addressUrl : ''} target="blank">
                    {el.address ? el.address : ''}
                  </a>
                </li>
                <li>
                  <Info>Email:</Info>
                  {el.email ? (
                    <a href={`mailto:` + el.email}>{el.email}</a>
                  ) : (
                    <p>phone only</p>
                  )}
                </li>
                <li>
                  <Info>Phone:</Info>
                  {el.phone ? (
                    <a href={`tel:` + el.phone}>{el.phone}</a>
                  ) : (
                    <p>website only</p>
                  )}
                </li>
              </ListInfo>
            </ContainerFriends>
          </ItemFriends>
        ))}
      {data && !data.length && (
        <NoNoticesFound>
          <NoNoticesFoundIcon>
            <use href={sprite + '#iconPaw'} />
          </NoNoticesFoundIcon>{' '}
          No news found{' '}
          <NoNoticesFoundIcon>
            <use href={sprite + '#iconPaw'} />
          </NoNoticesFoundIcon>
        </NoNoticesFound>
      )}
    </ListFriends>
  );
};

export default FriendItem;
