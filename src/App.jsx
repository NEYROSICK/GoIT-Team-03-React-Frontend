import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import AddPetPage from './pages/AddPetPage/AddPetPage';
import NoticesPage from './pages/NoticesPage/NoticesPage';
import UserPage from './pages/UserPage/UserPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="main" element={<Navigate to="/" />} />
          <Route path="notices" element={<NoticesPage />} />
          <Route path="add-pet" element={<AddPetPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
