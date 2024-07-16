import './style.css';
import Input from '../../components/UI/Input';
import { useAppSelector } from '../../store/hooks';
import { getProductCurrNumber } from '../../pages/ProductPage/Product'; // Ensure this path is correct
import PayModal from '../../components/PayModal';
import { useState } from 'react';

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart.value); // Get cart data from Redux store

  const [paymentMethod, setPaymentMethod] = useState<'e-money' | 'cash'>(
    'e-money',
  );

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, cartItem) => {
      const itemTotal =
        cartItem.item.price * getProductCurrNumber(cart, cartItem.item);
      return total + itemTotal;
    }, 0);
  };

  const totalPrice = calculateTotalPrice(); // Calculate total price
  const VAT = totalPrice * 0.18; // Calculate VAT at 18%
  const shippingCost = cart.length > 0 ? 50 : 0; // Fixed shipping cost if there are items in the cart
  const grandTotal = totalPrice + VAT + shippingCost; // Calculate grand total

  return (
    <div className="checkout-body">
      <div className="checkout-wrapper container">
        <div className="checkout-left">
          <div className="checkout container">
            <div className="checkout-header">
              <h1>checkout</h1>
            </div>
            <div className="billing-form">
              <Input
                label={'Name'}
                type="text"
                placeholder="Your name"
                errorMessage="Wrong name"
              />
              <Input
                label={'Email address'}
                type="text"
                placeholder="Your email"
                errorMessage="Wrong email address"
              />
              <Input
                label={'Phone Number'}
                type="text"
                placeholder="Your phone number"
                errorMessage="Wrong phone number"
              />
            </div>
            <div className="shipping-form">
              <div className="input-1">
                <Input
                  label={'Address'}
                  type="text"
                  placeholder="Your address"
                  errorMessage="Wrong address"
                />
              </div>
              <div className="input-2">
                <Input
                  label={'ZIP code'}
                  type="text"
                  placeholder="ZIP code"
                  errorMessage="Wrong zip code"
                />
                <Input
                  label={'City'}
                  type="text"
                  placeholder="Your city"
                  errorMessage="Wrong city"
                />
                <Input
                  label={'Country'}
                  type="text"
                  placeholder="Your country"
                  errorMessage="Wrong country"
                />
              </div>
            </div>
            <div className="payment-radio">
              <div className="method">
                <h4>Payment Method</h4>
              </div>
              <div className="radio-div">
                <Input
                  name="payment-type"
                  type="radio"
                  label={'e-Money'}
                  checked={paymentMethod === 'e-money'}
                  onChange={() => setPaymentMethod('e-money')}
                />
                <Input
                  name="payment-type"
                  type="radio"
                  label={'Cash on delivery'}
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                />
              </div>
            </div>
            {paymentMethod === 'cash' ? (
              <div className="cash-delivery">
                <div className="cash-svg">
                  <svg
                    width="48"
                    height="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                      fill="#D87D4A"
                    />
                  </svg>
                </div>
                <div className="cash-descr">
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              </div>
            ) : (
              <div className="e-money">
                <Input
                  label={'e-Money Number'}
                  type="text"
                  placeholder="Your e-Money number"
                  errorMessage="Wrong e-Money Number"
                />
                <Input
                  label={'e-Money PIN'}
                  type="text"
                  placeholder="Your e-Money PIN"
                  errorMessage="Wrong e-Money PIN"
                />
              </div>
            )}
          </div>
        </div>
        <div className="summary-container">
          <h2>Summary</h2>
          {cart.map((cartItem) => (
            <div key={cartItem.item.id} className="summary-item">
              <div className="summary-item-details">
                <div className="summary-item-image">
                  <img
                    src={`http://localhost:3001/assets/product-${cartItem.item.slug}/desktop/image-product.jpg`}
                    alt={cartItem.item.name}
                  />
                </div>
                <div className="summary-item-text">
                  <h3>{cartItem.item.name}</h3>
                  <span>${cartItem.item.price}</span>
                </div>
                <div className="quantity">
                  <span>x{getProductCurrNumber(cart, cartItem.item)}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="total-price">
            <span className="total">Total</span>
            <span className="tot-price">{`$ ${totalPrice.toFixed(2)}`}</span>
          </div>
          {cart.length > 0 && (
            <div className="shipping">
              <span className="shipping-label">Shipping</span>
              <span className="shipping-amount">{`$ ${shippingCost.toFixed(
                2,
              )}`}</span>
            </div>
          )}
          <div className="vat">
            <span className="vat-label">VAT (included)</span>
            <span className="vat-amount">{`$ ${VAT.toFixed(2)}`}</span>
          </div>
          <div className="grand-total">
            <span className="grand-total-label">Grand Total</span>
            <span className="grand-total-amount">{`$ ${grandTotal.toFixed(
              2,
            )}`}</span>
          </div>
          <PayModal cart={cart} grandTotal={grandTotal} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
