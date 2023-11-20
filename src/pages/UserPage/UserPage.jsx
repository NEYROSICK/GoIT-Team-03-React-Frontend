import UserData from '../../components/UserData/UserData'
import { PetsData } from '../../components/PetsData/PetsData';
import { UserPageContainer } from './UserPage.styled';

function UserPage() {
  return (
    <UserPageContainer>
      <UserData />
      <PetsData/>
    </UserPageContainer>
  )
}

export default UserPage
