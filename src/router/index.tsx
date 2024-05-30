import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Productfunc from "../pages/Product";
import Headphones from "../pages/Headphones/Headphones";
import Earphones from "../pages/Earphones/Earphones";
import Speakers from "../pages/Speakers/Speakers";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Productfunc />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/earphones" element={<Earphones />} />
      <Route path="/speakers" element={<Speakers />} />
    </Routes>
  );
};

export default Router;
