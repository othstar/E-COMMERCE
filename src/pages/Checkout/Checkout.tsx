import './style.css';
import Input from '../../components/UI/Input';
import NumberInput from '../../components/UI/NumberInput';
import { useState } from 'react';
import ModalUI from '../../components/UI/Modal';

const Checkout = () => {
  const [num, setNum] = useState(2);
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
            <div className="">
              <h4>payment nethod</h4>
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
          <ModalUI />
        </div>
        <div className="summary-container">
          <NumberInput number={num} setNumber={setNum} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
