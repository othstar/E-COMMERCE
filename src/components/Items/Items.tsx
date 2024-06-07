import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { Product } from '../../static/types';
import './style.css';
import zx9 from '/assets/home/desktop/image-speaker-zx9.png';
import Circle from '/assets/home/desktop/pattern-circles.svg';
// import zx7 from '../../assets/home/desktop/image-speaker-zx7.jpg';
// import yx1 from '../../assets/home/desktop/image-earphones-yx1.jpg';

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
  // const filteredProductSecond = data.filter((product: Product) =>
  //   [5].includes(product.id),
  // );

  // const filteredProductThird = data.filter((product: Product) =>
  //   [1].includes(product.id),
  // );

  return (
    <div className="items container">
      {filteredProductFirst.map((product: Product) => (
        <div
          key={product.id}
          className="item-container"
          style={{ background: '#D87D4A' }}
        >
          <div className="item-info">
            <img className="prod-image" src={zx9} alt="image" />
            <img className="circle-image" src={Circle} alt="" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <NavLink
              to={`/products/${product.id}`}
              className="see-product-button"
            >
              See Product
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
