import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getProducts,
  selectProducts,
} from "../../store/Products/Products.slice";
import { Product } from "../../static/types";
import { NavLink } from "react-router-dom";
import Showcase from "../../assets/product-xx99-mark-two-headphones/desktop/file.png";
import "./style.css";

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const [productImages, setProductImages] = useState<{ [key: number]: string }>(
    {}
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
            const image = await import(`../${product.image.desktop}`);
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
  const filteredProducts = products.filter(
    (product: Product) => product.id === 4
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
            <img
              src={Showcase}
              alt={product.name}
              style={{ height: 500, width: 600 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
