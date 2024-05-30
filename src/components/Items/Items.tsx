import "./style.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProducts, selectProducts } from "../../store/Products/Products.slice";
import { Product } from "../../static/types";
import { NavLink } from "react-router-dom";

const Items = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const [productImages, setProductImages] = useState<{ [key: number]: string }>({});

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

  return (
    <div>
      {products.map((product: Product) => {
        return (
          <div key={product.id} className="item-container">
            <div className="image-container">
              <img src={productImages[product.id] || ""} alt={product.name} />
            </div>
            <div className="item-info">
              <h3 style={{ color: "black" }}>{product.name}</h3>
              <p>{product.description}</p>
              <NavLink to={`/${product.id}`}>see product</NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
