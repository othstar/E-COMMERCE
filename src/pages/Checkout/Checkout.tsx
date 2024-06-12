import './style.css';
import Input from '../../components/UI/Input';

const Checkout = () => {
  return (
    <div className="checkout-body ">
      <div className="checkout-wrapper container ">
        <div className="checkout container">
          <div className="billing-form">
            <Input
              label={'Name'}
              type="text"
              placeholder="Your name"
              isError={true}
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
            <Input
              label={'Address'}
              type="text"
              placeholder="Your address"
              errorMessage="Wrong address"
            />
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
          <div className="payment-form">
            <Input type="radio" label={'e-Money'} />
            <Input type="radio" label={'Cash on delivery'} />
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
        <div className="summary-container">
          <h3>gamarjoba</h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
