import { NavLink } from 'react-router-dom';
import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { Product } from '../../static/types';

interface FilterCardProps {
  productId: number;
  imageSrc: string;
}

const FilterCard = ({ productId, imageSrc }: FilterCardProps) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.products.data);
  // const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProduct = data.find(
    (product: Product) => product.id === productId,
  );

  return (
    <div>
      {filteredProduct && (
        <div key={filteredProduct.id} className="filter-container">
          <img
            src={imageSrc}
            alt={filteredProduct.name}
            style={{ height: '70%', width: '90%' }}
          />
          <h3 className="filter-title">{filteredProduct.category}</h3>
          <NavLink
            to={`/${filteredProduct.category}`}
            className="filter-navlink"
          >
            shop
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default FilterCard;
