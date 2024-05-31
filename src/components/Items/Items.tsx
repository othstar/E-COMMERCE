import './style.css';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getProducts,
  selectProducts,
} from '../../store/Products/Products.slice';
import { Product } from '../../static/types';
import { NavLink } from 'react-router-dom';

const Items = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const [productImages, setProductImages] = useState<{ [key: number]: string }>(
    {},
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products) {
      const loadImages = async () => {
        const images: { [key: number]: string } = {};
        for (const product of products) {
          try {
            const image = await import(`../../${product.image.desktop}`);
            images[product.id] = image.default;
          } catch (error) {
            console.error(`Image load error: ${product.image.desktop}`, error);
          }
        }
        setProductImages(images);
      };
      loadImages();
    }
  }, [products]);

  const productsId1 = products.filter((product: Product) => product.id === 1);
  const productsId5 = products.filter((product: Product) => product.id === 5);
  const productsId6 = products.filter((product: Product) => product.id === 6);

  return (
    <div className="container">
      <div className="section section-id-6">
        {productsId6.map((product: Product) => (
          <div key={product.id} className="item-container ">
            <div className="image-container">
              <img src={productImages[product.id] || ''} alt={product.name} />
            </div>
            <div className="item-info">
              <h3 className="item-name">{product.name}</h3>
              <p className="item-description">{product.description}</p>
              <NavLink to={`/${product.id}`} className="see-product-button">
                See Product
              </NavLink>
            </div>
          </div>
        ))}
        <div className="section section-id-5">
          {productsId5.map((product: Product) => (
            <div key={product.id} className="item-container ">
              <div className="image-container">
                <img src={productImages[product.id] || ''} alt={product.name} />
              </div>
              <div className="item-info">
                <h3 className="item-name">{product.name}</h3>
                <p className="item-description">{product.description}</p>
                <NavLink to={`/${product.id}`} className="see-product-button">
                  See Product
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section section-id-1">
        {productsId1.map((product: Product) => (
          <div key={product.id} className="item-container">
            <div className="image-container">
              <img src={productImages[product.id] || ''} alt={product.name} />
            </div>
            <div className="item-info">
              <h3 className="item-name">{product.name}</h3>
              <p className="item-description">{product.description}</p>
              <NavLink to={`/${product.id}`} className="see-product-button">
                See Product
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
