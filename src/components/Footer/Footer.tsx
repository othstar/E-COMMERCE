import { NavLink } from 'react-router-dom';
import './style.css';
import fb from '/assets/shared/desktop/icon-facebook.svg';
import tw from '/assets/shared/desktop/icon-twitter.svg';
import ig from '/assets/shared/desktop/icon-instagram.svg';

const Footer = () => {
  return (
    <div className="footer-nav container">
      <div className="logo-descr">
        <NavLink to={'/'}>audiophile</NavLink>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <span>Copyright 2021. All Rights Reserved</span>
      </div>
      <div className="footer-categories">
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
        <div className="social-networks">
          <div className="facebook">
            <img src={fb} alt="fb" />
          </div>
          <div className="twitter">
            <img src={tw} alt="tw" />
          </div>
          <div className="instagram">
            <img src={ig} alt="ig" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
