import { useParams } from 'react-router-dom';
import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { OtherProduct, Product } from '../../static/types';
import { Includes } from '../../static/types';
import Filter from '../../components/Filter';
import Button from '../../components/UI/Button';
import NumberInput from '../../components/UI/NumberInput';

const Productfunc = () => {
  const params = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { id } = params;

  const product = products.find((p: Product) => p.id.toString() === id);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { others } = product;

  return (
    <div style={{ background: '#fafafa' }}>
      <div className="product">
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
              <span className="product-price">{product.price}$</span>
              <div className="product-buy">
                <NumberInput number={1} setNumber={() => {}} />
                <Button
                  isLink={false}
                  dir={`/products/${product.id}`}
                  type="primary"
                >
                  add to cart
                </Button>
              </div>
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
          <div className="images-showcase">
            <div className="left-images">
              <img
                src={`http://localhost:3001/assets/product-${product.slug}/desktop/image-gallery-1.jpg`}
                alt={product.slug}
              />
              <img
                src={`http://localhost:3001/assets/product-${product.slug}/desktop/image-gallery-2.jpg`}
                alt={product.slug}
              />
            </div>
            <div className="right-image">
              <img
                src={`http://localhost:3001/assets/product-${product.slug}/desktop/image-gallery-3.jpg`}
                alt={product.slug}
              />
            </div>
          </div>
          <div className="also-like">
            <h3>you may also like</h3>
          </div>
          <div className="others">
            {others.map((other: OtherProduct, index) => {
              const matchingProduct = products.find(
                (p: Product) => p.slug === other.slug,
              );
              if (!matchingProduct) return null;

              return (
                <div
                  key={`${other.slug}-${index}`}
                  className="others-container"
                >
                  <Button
                    isLink={true}
                    dir={`/products/${matchingProduct.id}`}
                    type="primary"
                  >
                    see product
                  </Button>
                  <span>{other.name}</span>
                  <img
                    src={`http://localhost:3001/assets/shared/desktop/image-${other.slug}.jpg`}
                    alt={other.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Filter />
    </div>
  );
};

export default Productfunc;
