import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import ErrorPage from './pages/ErrorPage/ErrorPage';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import SharedLayout from './components/Layout/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const FriendsPage = lazy(() => import('./pages/FriendsPage/FriendsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const AllNotices = lazy(() =>
  import('./components/FindPetComponents/allNotices/AllNotices'),
);
const FavoriteNotices = lazy(() =>
  import('./components/FindPetComponents/favoriteNotices/FavoriteNotices'),
);
const MyAds = lazy(() => import('./components/FindPetComponents/myAds/MyAds'));
const AddPetPage = lazy(() => import('./pages/AddPetPage/AddPetPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="main" />} />
        <Route path="main" element={<HomePage />} />
        <Route path="notices" element={<NoticesPage />}>
          <Route  index element={<Navigate to="sell" replace />}/>
          <Route path="sell" element={<AllNotices />} />
          <Route path="in-good-hands" element={<AllNotices />} />
          <Route path="lost-found" element={<AllNotices />} />
          <Route path="favorite" element={<FavoriteNotices />} />
          <Route path="my-ads" element={<MyAds />} />
        </Route>
        <Route path="news" element={<NewsPage />} />
        <Route path="friends" element={<FriendsPage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/user" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/user" component={<LoginPage />} />}
        />
        <Route
          path="/user"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPage />} />
          }
        />
        <Route
          path="add-pet"
          element={
            <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
