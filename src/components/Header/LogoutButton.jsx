
// import { ModalApproveAction } from './ModalApproveAction';
// import { useDispatch } from 'react-redux';
// import { Logout } from '../../redux/auth/authSlice';

export const LogoutButton = () => {
  const dispach = useDispatch();

  const handleLogout = () => {
    dispach(logout());
    // Обробка логіки виходу
  };

  return <button onClick={handleLogout}>Log out</button>;
};
