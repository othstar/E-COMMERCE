import Categories from '../../components/Categories';
import Filter from '../../components/Filter';
import Presentation from '../../components/Presentation';
import './style.css';
const Earphones = () => {
  return (
    <div className="headphones">
      <div className="categorie">
        <Categories categorieName="earphones" />
      </div>
      <Filter />
      <Presentation />
    </div>
  );
};

export default Earphones;
