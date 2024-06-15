import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/Products/Products.async.Actions';
import { Product } from '../../static/types';
import Button from '../UI/Button';

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
    (product: Product) => product.id == productId,
  );

  return (
    <div>
      {filteredProduct && (
        <div key={filteredProduct.id} className="filter-container">
          <img src={imageSrc} alt={filteredProduct.name} />
          <div className="filter-descr">
            <h3>{filteredProduct.category}</h3>
            <Button
              isLink={true}
              dir={`/${filteredProduct.category}`}
              type={'link'}
            >
              shop{' '}
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterCard;
