import './style.css';

type Props = {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
};

const NumberInput = ({ number, setNumber }: Props) => {
  return (
    <div className="number-input-wrapper">
      <button onClick={() => setNumber(number - 1)}>-</button>
      <span>{number}</span>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
};

export default NumberInput;
