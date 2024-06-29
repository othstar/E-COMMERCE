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

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = '#fbaf85'; // Change background color on hover
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = '#d87d4a'; // Restore original background color on mouse out
  };

  return (
    <>
      <div className="checkout-pay">
        <button
          onClick={openModal}
          style={{
            width: '100%',
            padding: '12px 25px',
            border: 'none',
            background: '#d87d4a',
            color: '#f1f1f1',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          CONTINUE & PAY
        </button>
      </div>
      <Modal
        onAfterOpen={() => (document.body.style.overflow = 'hidden')}
        onAfterClose={() => (document.body.style.overflow = 'auto')}
        className="checkout-modal"
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
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
                <div className="item-img">
                  <img
                    src={`http://localhost:3001/assets/product-${firstItem.item.slug}/desktop/image-product.jpg`}
                    alt={firstItem.item.name}
                  />
                </div>
                <div className="item-showcase-descr">
                  <div className="first-item-review">
                    <h3>{firstItem.item.name}</h3>
                    <span>$ {firstItem.item.price.toFixed(2)}</span>
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
          <div className="back-home">
            <Button
              isLink={true}
              dir={'/'}
              type={'primary'}
              onClick={closeModal}
            >
              back to home
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PayModal;
