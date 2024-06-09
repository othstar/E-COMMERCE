import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { Product } from '../../static/types';
import { Includes } from '../../static/types';
import Filter from '../../components/Filter';

const Productfunc = () => {
  const params = useParams();

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productId = params.id;

  const filteredProducts = data.filter(
    (product: Product) => product.id.toString() === productId,
  );

  return (
    <div style={{ background: '#f1f1f1' }}>
      <div className="product">
        {filteredProducts.map((product: Product) => (
          <div key={product.id} className="product-descr container">
            <div className="product-container">
              <div className="img-container">
                <img
                  src={`http://localhost:3001/assets/product-${product.slug}/desktop/image-product.jpg`}
                  alt={product.name}
                />
              </div>
              <div className="descr-container">
                {product.new ? <span>new product</span> : null}
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span>{product.price}$</span>
                <NavLink
                  to={`/products/${product.id}`}
                  className="see-product-button"
                >
                  add to cart
                </NavLink>
              </div>
            </div>
            <div className="features">
              <div className="features-container">
                <h3>features</h3>
                <p>{product.features}</p>
              </div>
              <div className="inTheBox">
                <h3>in the box</h3>
                {product.includes.map((include: Includes, index) => (
                  <div key={`${product.id}-${index}`}>
                    <span>
                      <span style={{ color: '#D87D4A' }}>
                        {include.quantity}x
                      </span>{' '}
                      {include.item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Filter />
    </div>
  );
};

export default Productfunc;
