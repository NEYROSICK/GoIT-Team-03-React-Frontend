import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HelloPage from './pages/HelloPage/HelloPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/hello" element={<HelloPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
