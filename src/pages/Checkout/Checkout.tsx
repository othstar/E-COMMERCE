import './style.css';
import Input from '../../components/UI/Input';

const Checkout = () => {
  return (
    <div className="checkout-body ">
      <div className="checkout-wrapper container ">
        <div className="checkout container">
          <div className="billing-form">
            <Input label={'Name'} type="text" placeholder="Your name" />
            <Input
              label={'Email address'}
              type="text"
              placeholder="Your email"
            />
            <Input
              label={'Phone Number'}
              type="text"
              placeholder="Your phone number"
            />
          </div>
          <div className="shipping-form">
            <Input label={'Address'} type="text" placeholder="Your address" />
            <Input label={'ZIP code'} type="text" placeholder="ZIP code" />
            <Input label={'City'} type="text" placeholder="Your city" />
            <Input label={'Country'} type="text" placeholder="Your country" />
          </div>
          <div className="payment-form">
            <Input type="radio" />
            <Input type="radio" />
            <Input
              label={'e-Money Number'}
              type="text"
              placeholder="Your e-Money number"
            />
            <Input
              label={'e-Money PIN'}
              type="text"
              placeholder="Your e-Money PIN"
            />
          </div>
        </div>
        <div className="summary-container">
          <h3>gamarjoba</h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
