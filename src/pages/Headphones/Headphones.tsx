import Categories from '../../components/Categories';
import Filter from '../../components/Filter';
import Presentation from '../../components/Presentation';
import './style.css';
const Headphones = () => {
  return (
    <div className="headphones">
      <div className="categorie">
        <Categories categorieName="headphones" />
      </div>
      <Filter />
      <Presentation />
    </div>
  );
};

export default Headphones;
