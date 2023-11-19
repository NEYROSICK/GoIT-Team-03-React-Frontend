
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <ul>
      <li><Link to="/news">News</Link></li>
      <li><Link to="/notices">Notices</Link></li>
      <li><Link to="/friends">Our Friends</Link></li>
    </ul>
  );
};


