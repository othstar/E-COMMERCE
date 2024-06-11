import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { Product } from '../../static/types';
import Button from '../UI/Button';

const Showcase = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.products.data);
  // const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = data.filter((product: Product) => product.id == 4);

  return (
    <div>
      {filteredProducts.map((product: Product) => (
        <div key={product.id} className="showcase container">
          <div className="showcase-descr">
            {product.new ? <span> new product</span> : null}
            <h2>{product.name}</h2>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <Button
              isLink={true}
              dir={`/products/${product.id}`}
              type={'primary'}
            >
              see product
            </Button>
          </div>
          <div className="showcase-logo"></div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
