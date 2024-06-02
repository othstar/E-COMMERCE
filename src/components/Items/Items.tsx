import './style.css';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getProducts,
  selectProducts,
} from '../../store/Products/Products.slice';
import { Product } from '../../static/types';
import { NavLink } from 'react-router-dom';

const Items = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product: Product) =>
    [1, 5, 6].includes(product.id),
  );

  return (
    <div className="container">
      <div className="section">
        {filteredProducts.map((product: Product) => (
          <div key={product.id} className="item-container">
            <div className="item-info">
              <h3 className="item-name">{product.name}</h3>
              <p className="item-description">{product.description}</p>
              <NavLink
                to={`/product/${product.id}`}
                className="see-product-button"
              >
                See Product
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
