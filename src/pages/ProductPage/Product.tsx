import { useParams } from 'react-router-dom';

import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { OtherProduct, Product } from '../../static/types';
import { Includes } from '../../static/types';
import Filter from '../../components/Filter';
import Button from '../../components/UI/Button';

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
                <Button
                  isLink={false}
                  dir={`/products/${product.id}`}
                  type={'primary'}
                >
                  add to cart
                </Button>
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
            <div className="others">
              {product.others.map((other: OtherProduct, index) => {
                const matchingProduct = data.find(
                  (p: Product) => p.slug === other.slug,
                );
                return (
                  <div
                    key={`${product.id}-${index}`}
                    className="others-container"
                  >
                    <h3>{other.name}</h3>
                    {matchingProduct && (
                      <Button
                        isLink={true}
                        dir={`/products/${product.id}`}
                        type={'primary'}
                      >
                        see product
                      </Button>
                    )}
                    <img
                      src={`http://localhost:3001/assets/shared/desktop/image-${other.slug}.jpg`}
                      alt={other.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <Filter />
    </div>
  );
};

export default Productfunc;
