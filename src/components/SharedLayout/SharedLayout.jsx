import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { BackImage } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <BackImage>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </BackImage>
  );
};

export default SharedLayout;
