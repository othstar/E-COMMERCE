import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getProducts, selectProducts } from "../store/Products/Products.slice";
import { Product } from "../types/types";

function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {products &&
        products.map((product: Product) => (
          <div key={product.id}>
            <img src={product.image.desktop} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
    </div>
  );
}

export default Home;
