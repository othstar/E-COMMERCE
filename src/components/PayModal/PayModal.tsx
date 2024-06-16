import './style.css';
import { useState } from 'react';
import Button from '../UI/Button';
import Modal from 'react-modal';
import { CartItem } from '../../static/types';

type PayModalProps = {
  cart: CartItem[];
  grandTotal: number;
};

const PayModal = ({ cart, grandTotal }: PayModalProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const firstItem = cart[0];
  const otherItemsCount = cart.length - 1;

  return (
    <>
      <div className="checkout-pay">
        <div>
          <button
            onClick={openModal}
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            CHECKOUT & PAY
          </button>
        </div>
      </div>
      <Modal
        onAfterOpen={() => (document.body.style.overflow = 'hidden')}
        onAfterClose={() => (document.body.style.overflow = 'auto')}
        className="checkout-modal"
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
      >
        <div className="pay-container">
          <div className="pay-items">
            <div className="accept-svg">
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                  <path
                    stroke="#FFF"
                    strokeWidth="4"
                    d="m20.754 33.333 6.751 6.751 15.804-15.803"
                  />
                </g>
              </svg>
            </div>
            <div className="h3-accept">
              <h3>thank you for your order</h3>
            </div>
            <div className="span-accept">
              You will receive an email confirmation shortly.
            </div>

            <div className="accept-order">
              <div className="item-box">
                <div className="item-showcase">
                  <img
                    src={`http://localhost:3001/assets/product-${firstItem.item.slug}/desktop/image-product.jpg`}
                    alt={firstItem.item.name}
                  />
                </div>
                <div className="item-showcase-descr">
                  <div className="first-item-review">
                    <h3>{firstItem.item.name}</h3>
                    <span>${firstItem.item.price.toFixed(2)}</span>
                  </div>
                  <div className="items-quantity">
                    <span>x{firstItem.amount}</span>
                  </div>
                </div>
              </div>

              <div className="total-review">
                <div className="grtotal-span">
                  <span>Grand Total </span>
                </div>
                <div className="gr-total">
                  {' '}
                  <span>$ {grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="others-showcase">
              {otherItemsCount > 0 && (
                <span>and {otherItemsCount} other item(s)</span>
              )}
            </div>
          </div>
          <Button isLink={true} dir={'/'} type={'primary'} onClick={closeModal}>
            back to home
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default PayModal;
