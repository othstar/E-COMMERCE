import './style.css';
import Filter from '../../components/Filter';
import Showcase from '../../components/Showcase';
import Items from '../../components/Items';
import Presentation from '../../components/Presentation';

const Home = () => {
  return (
    <>
      <Showcase />
      <div style={{ background: '#f1f1f1', marginTop: '30px' }}>
        <Filter />
        <Items />
        <Presentation />
      </div>
    </>
  );
};

export default Home;
