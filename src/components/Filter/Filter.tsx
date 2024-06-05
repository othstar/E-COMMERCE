import Headphones from '/assets/shared/desktop/image-category-thumbnail-headphones.png';
import Speakers from '/assets/shared/desktop/image-category-thumbnail-speakers.png';
import Earphones from '/assets/shared/desktop/image-category-thumbnail-earphones.png';
import FilterCard from '../Cards';
import './style.css';
const Filter = () => {
  return (
    <div className="filters container">
      <FilterCard productId={3} imageSrc={Headphones} />
      <FilterCard productId={6} imageSrc={Speakers} />
      <FilterCard productId={1} imageSrc={Earphones} />
    </div>
  );
};

export default Filter;
