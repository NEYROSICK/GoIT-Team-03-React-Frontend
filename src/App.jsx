import { Navigate, Route, Routes } from 'react-router-dom';

// import { lazy } from 'react';
import SharedLayout from './components/Layout/SharedLayout/SharedLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import AddPetPage from './pages/AddPetPage/AddPetPage';
import NoticesPage from './pages/NoticesPage/NoticesPage';
import UserPage from './pages/UserPage/UserPage';
import NewsPage from './pages/NewsPage/NewsPage';
import FriendsPage from './pages/FriendsPage/FriendsPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import AllNotices from './components/FindPetComponents/allNotices/AllNotices';
import FavoriteNotices from './components/FindPetComponents/favoriteNotices/FavoriteNotices';
import MyAds from './components/FindPetComponents/myAds/MyAds';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="main" />} />
        <Route path="main" element={<HomePage />} />
        <Route path="notices" element={<NoticesPage />}>
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
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default App;
