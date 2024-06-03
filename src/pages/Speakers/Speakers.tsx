import Categories from '../../components/Categories';
import Filter from '../../components/Filter';
import Presentation from '../../components/Presentation';
import './style.css';
const Speakers = () => {
  return (
    <div className="headphones">
      <div className="categorie">
        <Categories categorieName="speakers" />
      </div>
      <Filter />
      <Presentation />
    </div>
  );
};

export default Speakers;
