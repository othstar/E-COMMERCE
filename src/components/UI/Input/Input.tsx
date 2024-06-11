import './style.css';
import { InputProps } from '../../../static/types';
import classNames from 'classnames';

const Input = ({
  id = '',
  type,
  isError = false,
  placeholder,
  label = null,
}: InputProps) => {
  if (type === 'radio') {
    <div>
      <input
        type="radio"
        id={id}
        className={classNames({ 'input-error': isError })}
      />
      ;{label ? <label htmlFor={id}>{label}</label> : null}
    </div>;
  }
  return (
    <div className="input-wrapper">
      {/* <input className={`input ${isError ? 'input-error' : ''}`} type={type} />; */}
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        id={id}
        className={classNames({ input: true, 'input-error': isError })}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
