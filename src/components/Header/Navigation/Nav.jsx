import { Link, Route, Routes } from 'react-router-dom';

export const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/notices">Find pet</Link>
        </li>
        <li>
          <Link to="/friends">Our Friends</Link>
        </li>
      </ul>
    </div>
  );
};
