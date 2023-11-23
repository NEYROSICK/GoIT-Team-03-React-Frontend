import {  Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import SharedLayout from './components/Layout/SharedLayout/SharedLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import AddPetPage from './pages/AddPetPage/AddPetPage';
import NoticesPage from './pages/NoticesPage/NoticesPage';
import UserPage from './pages/UserPage/UserPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage  />} />
        <Route path="notices" element={<NoticesPage />} />
          <Route path="add-pet" element={<AddPetPage />} />
          <Route path="*" element={<ErrorPage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/user" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/user" component={<LoginPage />} />
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPage />} />
          }
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );

}
export default App;
