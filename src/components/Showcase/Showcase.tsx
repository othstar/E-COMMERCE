import ShowcaseImg from '/assets/product-xx99-mark-two-headphones/desktop/file.png';
import { NavLink } from 'react-router-dom';
import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { Product } from '../../static/types';

const Showcase = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.products.data);
  // const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = data.filter((product: Product) => product.id === 4);

  return (
    <div>
      {filteredProducts.map((product: Product) => (
        <div key={product.id} className="showcase container">
          <div className="showcase-descr">
            <span>new product</span>
            <h2>{product.name}</h2>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <NavLink to={`/product/${product.id}`} className="navlink-button">
              see product
            </NavLink>
          </div>
          <div className="showcase-logo">
            <img
              src={ShowcaseImg}
              alt={product.name}
              style={{ height: 600, width: 600 }}
            />
          </div>
        </div>
      ))}
      <div style={{ background: '#f1f1f1', marginTop: '30px' }}></div>
    </div>
  );
};

export default Showcase;
