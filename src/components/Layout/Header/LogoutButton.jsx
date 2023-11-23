
// import { ModalApproveAction } from './ModalApproveAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../../redux/auth/authSlice';

export const LogoutButton = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispach(logOut());
    navigate('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
};
