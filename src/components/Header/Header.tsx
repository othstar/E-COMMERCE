import { NavLink } from 'react-router-dom';
import './style.css';

import HeaderModal from '../HeaderModal';

const Header = () => {
  return (
    <header>
      <div className="navbar container">
        <div className="logo">
          <NavLink to={'/'}>audiophile</NavLink>
        </div>
        <ul className="categories">
          <li>
            <NavLink to={'/'}>home</NavLink>
          </li>
          <li>
            <NavLink to={'/headphones'}>headphones</NavLink>
          </li>
          <li>
            <NavLink to={'/speakers'}>speakers</NavLink>
          </li>
          <li>
            <NavLink to={'/earphones'}>earphones</NavLink>
          </li>
        </ul>

        <HeaderModal />
      </div>
      <div className="underline container"></div>
    </header>
  );
};

export default Header;
