import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { Product } from '../../static/types';
import './style.css';
import zx9 from '/assets/home/desktop/image-speaker-zx9.png';
import zx7 from '/assets/home/desktop/image-speaker-zx7.jpg';
import yx1 from '/assets/home/desktop/image-earphones-yx1.jpg';
import Circle from '/assets/home/desktop/pattern-circles.svg';
import Button from '../UI/Button';

const Items = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.products.data);
  // const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProductFirst = data.filter(
    (product: Product) => product.id == 6,
  );

  const filteredProductSecond = data.filter(
    (product: Product) => product.id == 5,
  );

  const filteredProductThird = data.filter(
    (product: Product) => product.id == 1,
  );

  return (
    <div className="items container">
      {filteredProductFirst.map((product: Product) => (
        <div
          key={product.id}
          className="item-container"
          style={{ background: '#D87D4A' }}
        >
          <img className="prod-image" src={zx9} alt="image" />
          <div className="respo-image"></div>
          <img className="circle-image" src={Circle} alt="" />
          <div className="item-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Button
              isLink={true}
              dir={`/products/${product.id}`}
              type={'secondary'}
            >
              see product
            </Button>
          </div>
        </div>
      ))}
      {filteredProductSecond.map((product: Product) => (
        <div
          key={product.id}
          className="item-container-sec"
          style={{ background: 'transparent' }}
        >
          <img className="prod-image-sec" src={zx7} alt="image" />
          <div className="respo-image-sec"></div>
          <div className="item-info-sec">
            <h3>{product.name}</h3>
            <Button
              isLink={true}
              dir={`/products/${product.id}`}
              type={'secondary'}
            >
              see product
            </Button>
          </div>
        </div>
      ))}
      {filteredProductThird.map((product: Product) => (
        <div key={product.id} className="item-container-third">
          <div className="image-div">
            <img className="prod-image-third" src={yx1} alt={product.name} />
            <div className="respo-image-third"></div>
          </div>
          <div className="item-info-third">
            <h3>{product.name}</h3>
            <Button
              isLink={true}
              dir={`/products/${product.id}`}
              type={'secondary'}
            >
              see product
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
