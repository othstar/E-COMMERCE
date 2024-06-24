import Modal from 'react-modal';
import { useState } from 'react';
import './style.css';
import Button from '../UI/Button';
import NumberInput from '../UI/NumberInput';
import { getProductCurrNumber } from '../../pages/ProductPage/Product';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearCart, updateCart } from '../../store/Cart/Cart.slice';
import Filter from '../Filter';

const BurgerContainer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.value);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, items) => {
      const itemTotal =
        items.item.price * getProductCurrNumber(cart, items.item);
      return total + itemTotal;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();
  return (
    <>
      <div className="burger-bar">
        <div>
          <button
            onClick={openModal}
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M4 18L20 18"
                  stroke="#f1f1f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />{' '}
                <path
                  d="M4 12L20 12"
                  stroke="#f1f1f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />{' '}
                <path
                  d="M4 6L20 6"
                  stroke="#f1f1f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />{' '}
              </g>
            </svg>
          </button>
        </div>
      </div>
      <Modal
        onAfterOpen={() => (document.body.style.overflow = 'hidden')}
        onAfterClose={() => (document.body.style.overflow = 'auto')}
        className="burger-modal"
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
      >
        <div className="burger-container">
          <Filter />
        </div>
      </Modal>
    </>
  );
};

export default BurgerContainer;
