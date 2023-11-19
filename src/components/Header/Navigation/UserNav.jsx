
import { Logout } from '../Logout';
import { Link } from 'react-router-dom';

export const UserNav = () => {
  return (
    <div>
      <Link to="/user">UserPage</Link>
      <Logout />
    </div>
  );
};
