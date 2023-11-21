
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import AddPetPage from './pages/AddPetPage/AddPetPage';
import NoticesPage from './pages/NoticesPage/NoticesPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/main" element={<HomePage />} />
          <Route path="/addPet" element={<AddPetPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="notices" element={<NoticesPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
