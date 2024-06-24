import { useParams } from 'react-router-dom';
import './style.css';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { CartItem, OtherProduct, Product } from '../../static/types';
import { Includes } from '../../static/types';
import Filter from '../../components/Filter';
import Button from '../../components/UI/Button';
import NumberInput from '../../components/UI/NumberInput';
import Presentation from '../../components/Presentation';
import { updateCart } from '../../store/Cart/Cart.slice';

export const getProductCurrNumber = (
  cartState: CartItem[],
  product: Product,
) => {
  const prod = cartState.find((p) => p.item.id === product?.id);
  if (prod) {
    return prod.amount;
  }
  return 1;
};

const Productfunc = () => {
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.data);
  const [num, setNum] = useState(1);

  const { id } = params;

  const product = products.find((p: Product) => p.id.toString() === id);
  const cart = useAppSelector((state) => state.cart.value);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!product) return;
    setNum(getProductCurrNumber(cart, product));
  }, [product, setNum, cart]);

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
              <div className="desktop-image">
                <img
                  src={`http://localhost:3001/assets/product-${product.slug}/desktop/image-product.jpg`}
                  alt={product.name}
                />
              </div>
              <div className="tablet-image">
                <img
                  src={`http://localhost:3001/assets/product-${product.slug}/tablet/image-product.jpg`}
                  alt={product.name}
                />
              </div>
              <div className="mobile-image">
                <img
                  src={`http://localhost:3001/assets/product-${product.slug}/mobile/image-product.jpg`}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="descr-container">
              {product.new ? <span>new product</span> : null}
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="product-price">$ {product.price}</span>
              <div className="product-buy">
                <NumberInput number={num} setNumber={setNum} maxQuantity={50} />
                <Button
                  onClick={() => dispatch(updateCart({ num, product }))}
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
              <div className="includes-wrapper">
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
          </div>
          <div className="images-showcase">
            <div className="desktop-left-images">
              <img
                src={`http://localhost:3001/assets/product-${product.slug}/desktop/image-gallery-1.jpg`}
                alt={product.slug}
              />
              <img
                src={`http://localhost:3001/assets/product-${product.slug}/desktop/image-gallery-2.jpg`}
                alt={product.slug}
              />
            </div>
            <div className="desktop-right-image">
              <img
                src={`http://localhost:3001/assets/product-${product.slug}/desktop/image-gallery-3.jpg`}
                alt={product.slug}
              />
            </div>
            <div className="tablet-left-images">
              <img
                src={`http://localhost:3001/assets/product-${product.slug}/tablet/image-gallery-1.jpg`}
                alt={product.slug}
              />
              <img
                src={`http://localhost:3001/assets/product-${product.slug}/tablet/image-gallery-2.jpg`}
                alt={product.slug}
              />
            </div>
            <div className="tablet-right-image">
              <img
                src={`http://localhost:3001/assets/product-${product.slug}/tablet/image-gallery-3.jpg`}
                alt={product.slug}
              />
            </div>
            <div className="mobile-left-images">
              <img
                src={`http://localhost:3001/assets/product-${product.slug}/mobile/image-gallery-1.jpg`}
                alt={product.slug}
              />
              <img
                src={`http://localhost:3001/assets/product-${product.slug}/mobile/image-gallery-2.jpg`}
                alt={product.slug}
              />
            </div>
            <div className="mobile-right-image">
              <img
                src={`http://localhost:3001/assets/product-${product.slug}/mobile/image-gallery-3.jpg`}
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
                  <div className="desktop-product-img">
                    <img
                      src={`http://localhost:3001/assets/shared/desktop/image-${other.slug}.jpg`}
                      alt={other.name}
                    />
                  </div>
                  <div className="tablet-product-img">
                    <img
                      src={`http://localhost:3001/assets/shared/tablet/image-${other.slug}.jpg`}
                      alt={other.name}
                    />
                  </div>
                  <div className="mobile-product-img">
                    <img
                      src={`http://localhost:3001/assets/shared/mobile/image-${other.slug}.jpg`}
                      alt={other.name}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Filter />
      <Presentation />
    </div>
  );
};

export default Productfunc;
