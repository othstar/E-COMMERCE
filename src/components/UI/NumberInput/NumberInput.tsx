import './style.css';
import { NumberInputProps } from '../../../static/types';

const NumberInput = ({
  number,
  setNumber,
  maxQuantity = 100,
}: NumberInputProps) => {
  return (
    <div className="number-input-wrapper">
      <button onClick={() => setNumber(number === 0 ? number : number - 1)}>
        -
      </button>
      <span>{number}</span>
      <button
        onClick={() => setNumber(number === maxQuantity ? number : number + 1)}
      >
        +
      </button>
    </div>
  );
};

export default NumberInput;
