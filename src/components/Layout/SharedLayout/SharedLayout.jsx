import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BackImage } from './SharedLayout.styled';
import { Header } from '../Header/Header';

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
