import { NavLink } from "react-router-dom";
import "./style.css"
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getProducts,
  selectProducts,
} from "../../store/Products/Products.slice";
import { Product } from "../../static/types";


interface FilterCardProps {
    productId: number;
    imageSrc: string;

  }

const FilterCard = ({productId, imageSrc }: FilterCardProps) => {
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
  const filteredProduct = products.find((product: Product) => product.id === productId);

  return (
    <div>
      {filteredProduct && (
        <div key={filteredProduct.id} className="filter-container">
          <img
            src={imageSrc}
            alt={filteredProduct.name}
            style={{ width: 200, background: "gray" }}
          />
          <h3>{filteredProduct.category}</h3>
          <NavLink to={`/${filteredProduct.category}`}>shop</NavLink>
        </div>
      )}
    </div>
    )
}

export default FilterCard;