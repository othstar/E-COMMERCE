import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getProducts, selectProducts } from '../store/Products/Products.slice';
import { Product } from '../static/types';
import { NavLink } from 'react-router-dom';

const Productfunc = () => {
  const params = useParams();
  console.log(params);

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(
    (product: Product) => product.id === 4,
  );
  return (
    <div>
      {filteredProducts.map((product: Product) => (
        <div key={product.id} className="showcase">
          <div className="showcase-descr">
            <span>new product</span>
            <h2>{product.name}</h2>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <NavLink to={`/product/${product.id}`}>see product</NavLink>
          </div>
          <div className="showcase-logo">
            <img alt={product.name} style={{ height: 600, width: 600 }} />
          </div>
        </div>
      ))}
      <div style={{ background: '#f1f1f1', marginTop: '30px' }}></div>
    </div>
  );
};

export default Productfunc;
