import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { Product } from '../../static/types';
import { Includes } from '../../static/types';

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
    <div className="product">
      {filteredProducts.map((product: Product) => (
        <div key={product.id} className="product-container container">
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
          <div className="">
            <div className="features">{product.features}</div>
            <div className="inTheBox">
              {product.includes.map((includes: Includes, index) => (
                <div key={`${product.id}-${index}`}>
                  {includes.quantity} x {includes.item}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productfunc;
