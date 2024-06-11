import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Productfunc from '../pages/ProductPage/Product';
import Type from '../pages/Type/Type';
import Checkout from '../pages/Checkout/Checkout';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:type" element={<Type />} />
      <Route path="/products/:id" element={<Productfunc />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Router;
