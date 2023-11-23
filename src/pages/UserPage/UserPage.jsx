import UserData from '../../components/UserPageComponents/UserData/UserData'
import { PetsData } from '../../components/UserPageComponents/PetsData/PetsData';
import { UserPageContainer,Container } from './UserPage.styled';

function UserPage() {
  return (
    <Container>
    <UserPageContainer>
      <UserData />
      <PetsData/>
    </UserPageContainer>
    </Container>
  )
}

export default UserPage
