import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getProducts,
  selectProducts,
} from '../../store/Products/Products.slice';
import { Product } from '../../static/types';
import Categories from '../../components/Categories';
import Filter from '../../components/Filter';
import Presentation from '../../components/Presentation';
import './style.css';
const Headphones = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProduct = products.filter(
    (product: Product) => product.category === 'headphones',
  );
  return (
    <div className="speakers">
      <div className="categorie">
        <Categories categorieName="speakers" />
      </div>
      <Filter />
      {filteredProduct.map((product: Product) => (
        <div key={product.id} className="speaker-container">
          <div className="speaker-image"></div>
          <div className="speaker-descr">
            {product.new ? <span>new product</span> : null}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <NavLink
              to={`/product/${product.id}`}
              className="see-product-button"
            >
              See Product
            </NavLink>
          </div>
        </div>
      ))}
      <Presentation />
    </div>
  );
};

export default Headphones;
