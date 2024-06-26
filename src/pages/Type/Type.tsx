import { useParams } from 'react-router-dom';
import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { Product } from '../../static/types';
import Categories from '../../components/Categories';
import Filter from '../../components/Filter';
import Presentation from '../../components/Presentation';
import './style.css';
import Button from '../../components/UI/Button';

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

      <div className="main">
        {filteredProduct.map((product: Product) => (
          <div key={product.id} className="container">
            <div className="type-container">
              <div className="type-image">
                <img src={product.image.desktop} alt={product.name} />
              </div>
              <div className="image-tablet">
                <img src={product.image.tablet} alt={product.name} />
              </div>
              <div className="image-mobile">
                <img src={product.image.mobile} alt={product.name} />
              </div>
              <div className="type-descr">
                {product.new ? <span>new product</span> : null}
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Button
                  isLink={true}
                  dir={`/products/${product.id}`}
                  type={'primary'}
                >
                  see product
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Filter />
      <Presentation />
    </div>
  );
};

export default Type;
