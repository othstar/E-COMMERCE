import Headphones from "../../assets/product-xx99-mark-one-headphones/desktop/file.png";
import Speakers from "../../assets/product-zx9-speaker/desktop/file.png";
import Earphones from "../../assets/product-yx1-earphones/desktop/file.png";
import { NavLink } from "react-router-dom";
import "./style.css"
const Filter = () => {
    return (
        <div className="filter-container">
        <div className="headphones-container">
          <img src={Headphones} alt="headphones" style={{ height: 200, width: 200 }}  />
          <h3>headphones</h3>
          <NavLink to={"/headphones"}>shop</NavLink>
        </div>
        <div className="speakers-filter">
          <img src={Speakers} alt="speakers" style={{ height: 200, width: 200 }}  />
          <h3>speakers</h3>
          <NavLink to={"/speakers"}>shop</NavLink>
        </div>
        <div className="earphones-filter">
          <img src={Earphones} alt="earphones" style={{ height: 200, width: 200 }} />
          <h3>earphones</h3>
          <NavLink to={"/earphones"}>shop</NavLink>
        </div>
      </div>
    )
}

export default Filter;