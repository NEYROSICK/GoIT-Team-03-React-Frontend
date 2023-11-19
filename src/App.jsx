import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import NoticesPage from './pages/NoticesPage/NoticesPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="notices" element={<NoticesPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;