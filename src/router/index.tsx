import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Productfunc from '../pages/Product';
import Type from '../pages/Type/Type';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:type" element={<Type />} />
      <Route path="/:type/:id" element={<Productfunc />} />
    </Routes>
  );
};

export default Router;
