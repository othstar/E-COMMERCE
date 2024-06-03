import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getProducts,
  selectProducts,
} from '../../store/Products/Products.slice';
import { Product } from '../../static/types';
import './style.css';
import Categories from '../../components/Categories';
import Filter from '../../components/Filter';
import Presentation from '../../components/Presentation';
import logo from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

const Earphones = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProduct = products.filter(
    (product: Product) => product.category === 'earphones',
  );
  return (
    <div className="earphones">
      <div className="categorie">
        <Categories categorieName="earphones" />
      </div>
      {filteredProduct.map((product: Product) => (
        <div key={product.id} className="product-container container">
          <div className="img-container">
            <img src={logo} alt={product.name} />
          </div>
          <div className="descr-container">
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
      <Filter />
      <Presentation />
    </div>
  );
};

export default Earphones;
