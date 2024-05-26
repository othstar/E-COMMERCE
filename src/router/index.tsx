import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Headphones from "../pages/Headphones";
import Earphones from "../pages/Earphones";
import Speakers from "../pages/Speakers";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/earphones" element={<Earphones />} />
      <Route path="/speakers" element={<Speakers />} />
    </Routes>
  );
};

export default Router;
