import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { Product } from '../../static/types';
import { Includes } from '../../static/types';

const Productfunc = () => {
  const params = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.products.data);
  // const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log('Product data:', data);
  }, [data]);

  const productId = Number(params.id);

  const filteredProducts = data.filter(
    (product: Product) => product.id === productId,
  );
  return (
    <div className="product">
      {filteredProducts.map((product: Product) => (
        <div key={product.id} className="product-container container">
          <div className="img-container">
            <img src={product.image.desktop} alt={product.name} />
          </div>
          <div className="descr-container">
            {product.new ? <span>new product</span> : null}

            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}$</span>
            <NavLink
              to={`/${product.category}/${product.id}`}
              className="see-product-button"
            >
              add to cart
            </NavLink>
          </div>
          <div className="">
            <div className="features">{product.features}</div>
            <div className="inTheBox">
              {product.includes.map((includes: Includes) => (
                <div key={product.id}>{includes.item}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productfunc;
