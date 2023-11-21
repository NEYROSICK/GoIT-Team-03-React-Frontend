import UserData from '../../components/UserData/UserData'
import { PetsData } from '../../components/PetsData/PetsData';
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
