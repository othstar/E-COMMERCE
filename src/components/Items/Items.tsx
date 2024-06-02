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

  const filteredProducts = products.filter((product: Product) =>
    [1, 5, 6].includes(product.id),
  );

  return (
    <div className="container">
      <div className="section">
        {filteredProducts.map((product: Product) => (
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
