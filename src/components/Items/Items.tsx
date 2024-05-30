import "./style.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProducts, selectProducts } from "../../store/Products/Products.slice";
import { Product } from "../../static/types";
import { NavLink } from "react-router-dom";

const Items = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
    console.log(products)
  }, [dispatch]);

  

  return (
    <div>
      {products.map((product: Product) => {
        return (
          <div key={product.id} className="item-container">
            <div className="image-container">
              <img src={product.image.desktop} alt={product.name} />
            </div>
            <div className="item-info">
              <h3 style={{color: "black"}}>{product.name}</h3>
              <p>{product.description}</p>
              <NavLink to={`/${product.id}`}>see product</NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
