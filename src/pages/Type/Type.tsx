import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { Product } from '../../static/types';
import Categories from '../../components/Categories';
import Filter from '../../components/Filter';
import Presentation from '../../components/Presentation';
import './style.css';

const Type = () => {
  const params = useParams<{ type: string }>();

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.products.data);
  // const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const category = params.type;
  const filteredProduct = data.filter(
    (product: Product) => product.category === category,
  );

  return (
    <div className="type">
      <div className="categorie">
        <Categories categorieName={category} />
      </div>
      <Filter />

      {filteredProduct.map((product: Product) => (
        <div key={product.id} className="main container">
          <div className="type-container">
            <div className="type-image">
              <img src={product.image.desktop} alt={product.name} />
            </div>
            <div className="type-descr">
              {product.new ? <span>new product</span> : null}
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <NavLink
                to={`/products/${product.id}`}
                className="see-product-button"
              >
                see Product
              </NavLink>
            </div>
          </div>
        </div>
      ))}
      <Presentation />
    </div>
  );
};

export default Type;
