import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getProducts,
  selectProducts,
} from '../../store/Products/Products.slice';
import { Product } from '../../static/types';
import { NavLink } from 'react-router-dom';
import zx9 from '../../assets/home/desktop/image-speaker-zx9.png';
import zx7 from '../../assets/home/desktop/image-speaker-zx7.jpg';
import yx1 from '../../assets/home/desktop/image-earphones-yx1.jpg';

const Items = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProductFirst = products.filter((product: Product) =>
    [6].includes(product.id),
  );
  const filteredProductSecond = products.filter((product: Product) =>
    [5].includes(product.id),
  );

  const filteredProductThird = products.filter((product: Product) =>
    [1].includes(product.id),
  );

  return (
    <div className="container">
      {/* <div className="section">
        {filteredProductFirst.map((product: Product) => (
          <div
            key={product.id}
            className="item-container container"
            style={{ background: '#D87D4A' }}
          >
            <div className="image-info">
              <img src={zx9} alt={product.slug} style={{ width: '50%' }} />
            </div>
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
        {filteredProductSecond.map((product: Product) => (
          <div key={product.id} className="item-container">
            <div className="image-container">
              <img src={zx7} alt={product.slug} />
              <div className="item-info">
                <h3 className="item-name">{product.name}</h3>
                <NavLink
                  to={`/product/${product.id}`}
                  className="see-product-button"
                >
                  See Product
                </NavLink>
              </div>
            </div>
          </div>
        ))}
        {filteredProductThird.map((product: Product) => (
          <div key={product.id} className="item-container">
            <img src={yx1} alt={product.slug} />
            <div className="item-container">
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
      </div> */}
    </div>
  );
};

export default Items;
