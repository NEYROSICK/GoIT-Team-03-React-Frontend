import {
  ListFriends,
  ItemFriends,
  TitleFriends,
  ContainerFriends,
  Info,
  FriendsPhoto,
  ListInfo,
} from './FriendsItem.stuled';
import { useGetFriendsQuery } from '../../redux/API/RTKQueryApi';

import Dropdown from './Dropdown/Dropdown';
const FriendItem = () => {
  const { data } = useGetFriendsQuery();
  return (
    <ListFriends>
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
    </ListFriends>
  );
};

export default FriendItem;
