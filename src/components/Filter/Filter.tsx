import Headphones from "../../assets/product-xx99-mark-one-headphones/desktop/file.png";
import Speakers from "../../assets/product-zx9-speaker/desktop/file.png";
import Earphones from "../../assets/product-yx1-earphones/desktop/file.png";
import FilterCard from "../Cards";
import "./style.css"
const Filter = () => {
    return (
      <>
      <FilterCard
        productId={3}
        imageSrc={Headphones}
      />
      <FilterCard
        productId={6}
        imageSrc={Speakers}
      />
      <FilterCard
        productId={1}
        imageSrc={Earphones}
      />
    </>
    )
}

export default Filter;