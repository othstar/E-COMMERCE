import { NavLink } from "react-router-dom";
import "./style.css"

const Footer = () => {
  return (
  
<div className="footer-nav">
  <div className="logo-descr">
    <NavLink to={"/"}>audiophile</NavLink>
    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
   <p>Copyright 2021. All Rights Reserved</p>
  </div>
  <div className="footer-categories">
  <ul className="categories">
          <li>
            <NavLink to={"/"}>home</NavLink>
          </li>
          <li>
            <NavLink to={"/headphones"}>headphones</NavLink>
          </li>
          <li>
            <NavLink to={"/speakers"}>speakers</NavLink>
          </li>
          <li>
            <NavLink to={"/earphones"}>earphones</NavLink>
          </li>
        </ul>
        <div className="social-networks">logo</div>
  </div>
</div>

  )
};

export default Footer;
