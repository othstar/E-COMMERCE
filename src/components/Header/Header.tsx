import { NavLink } from 'react-router-dom';
import './style.css';
import Modal from 'react-modal';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartContexts } from '../../static/types';
import NumberInput from '../UI/NumberInput';
import { getProductCurrNumber } from '../../pages/ProductPage/Product';
import Button from '../UI/Button';

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { cartState, updateCart } = useContext(CartContext) as CartContexts;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const calculateTotalPrice = () => {
    return cartState.reduce((total, items) => {
      const itemTotal =
        items.item.price * getProductCurrNumber(cartState, items.item);
      return total + itemTotal;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <header>
      <div className="navbar container">
        <div className="logo">
          <NavLink to={'/'}>audiophile</NavLink>
        </div>
        <ul className="categories">
          <li>
            <NavLink to={'/'}>home</NavLink>
          </li>
          <li>
            <NavLink to={'/headphones'}>headphones</NavLink>
          </li>
          <li>
            <NavLink to={'/speakers'}>speakers</NavLink>
          </li>
          <li>
            <NavLink to={'/earphones'}>earphones</NavLink>
          </li>
        </ul>
        <div className="cart">
          <div>
            <button
              onClick={openModal}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                  fill="#FFF"
                  fillRule="nonzero"
                />
              </svg>
            </button>
            <Modal
              onAfterOpen={() => (document.body.style.overflow = 'hidden')}
              onAfterClose={() => (document.body.style.overflow = 'auto')}
              className="cart-modal"
              onRequestClose={closeModal}
              shouldCloseOnOverlayClick={true}
              isOpen={modalIsOpen}
              contentLabel="Example Modal"
            >
              <div className="cart-container">
                {cartState.map((items) => (
                  <div key={items.item.id} className="items-container">
                    <div className="left-container">
                      <div className="img-container">
                        <img
                          src={`http://localhost:3001/assets/product-${items.item.slug}/desktop/image-product.jpg`}
                          alt={items.item.name}
                        />
                      </div>
                      <div className="items-info">
                        <h3>{items.item.name}</h3>
                        <span className="items-price">{items.item.price}$</span>
                      </div>
                    </div>
                    <div className="descr-container">
                      <div className="items-buy">
                        {items.item && (
                          <div
                            key={items.item.id}
                            className="number-input-container"
                          >
                            <NumberInput
                              number={getProductCurrNumber(
                                cartState,
                                items.item,
                              )}
                              setNumber={(num: number) =>
                                updateCart(num, items.item)
                              }
                              maxQuantity={50}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="checkout-container">
                  <div className="total-price">
                    <span className="total">Total</span>
                    <span className="tot-price">{`$ ${totalPrice}`}</span>
                  </div>
                  <Button
                    isLink={true}
                    dir={'/checkout'}
                    type={'primary'}
                    onClick={closeModal}
                  >
                    checkout
                  </Button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
      <div className="underline container"></div>
    </header>
  );
};

export default Header;
