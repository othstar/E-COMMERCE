import './style.css';
import Input from '../../components/UI/Input';
import { useAppSelector } from '../../store/hooks';
import { getProductCurrNumber } from '../../pages/ProductPage/Product'; // Ensure this path is correct
import PayModal from '../../components/PayModal';

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart.value); // Get cart data from Redux store

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
                <Input name="payment-type" type="radio" label={'e-Money'} />
                <Input
                  name="payment-type"
                  type="radio"
                  label={'Cash on delivery'}
                />
              </div>
            </div>
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
