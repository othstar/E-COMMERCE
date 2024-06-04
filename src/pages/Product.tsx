import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getProducts, selectProducts } from '../store/Products/Products.slice';
import { Product } from '../static/types';
import { NavLink } from 'react-router-dom';

const Productfunc = () => {
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productId = Number(params.id);

  const filteredProducts = products.filter(
    (product: Product) => product.id === productId,
  );
  return (
    <div className="earphones">
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
        </div>
      ))}
    </div>
  );
};

export default Productfunc;
