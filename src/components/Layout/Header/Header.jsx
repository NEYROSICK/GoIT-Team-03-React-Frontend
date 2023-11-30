import { useSelector } from 'react-redux';
import { Logo } from './Logo/Logo';
import { Nav } from './Navigation/Nav/Nav';
import { AuthNav } from './Navigation/AuthNav/AuthNav';
import { UserNav } from './Navigation/UserNav/UserNav';
import { HeaderBurger } from './HeaderBurger/HeaderBurger';
import { Navigation, HeaderSection, HeaderContainer } from './Header.styled';
import { Container } from '../Container/Container';
import { useState } from 'react';
import { ModalBurger } from './ModalBurger/ModalBurger';

export const Header = () => {
  const { token } = useSelector((state) => state.auth);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HeaderSection>
        <Container>
          <HeaderContainer>
            <Logo onClose={setIsModalOpen} />
            <Navigation>
              {token ? (
                <UserNav isModalOpen={isModalOpen} onClose={setIsModalOpen} />
              ) : (
                <AuthNav isModalOpen={isModalOpen} onClose={setIsModalOpen} />
              )}
              <Nav />
            </Navigation>
            <HeaderBurger
              toggleModal={toggleModal}
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
            />
          </HeaderContainer>
        </Container>
      </HeaderSection>
      <ModalBurger
        onClose={setIsModalOpen}
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
      />
    </>
  );
};
