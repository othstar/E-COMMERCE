import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  console.log(params);
  return <div>Product</div>;
};

export default Product;
