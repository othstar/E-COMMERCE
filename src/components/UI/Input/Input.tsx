import './style.css';
import { InputProps } from '../../../static/types';
import classNames from 'classnames';

const Input = ({
  id = '',
  type,
  isError = false,
  errorMessage = '',
  placeholder,
  name = '',
  label = null,
  checked,
  ...props
}: InputProps) => {
  if (type === 'radio') {
    return (
      <div
        className={classNames({ 'radio-input-wrapper': true, error: isError })}
      >
        <input
          {...props}
          type="radio"
          name={name}
          id={id}
          className={classNames({})}
          checked={checked}
        />
        {label ? <label htmlFor={id}>{label}</label> : null}
      </div>
    );
  }
  return (
    <div className={classNames({ 'input-wrapper': true, error: isError })}>
      {/* <input className={`input ${isError ? 'input-error' : ''}`} type={type} />; */}
      {label ? <label htmlFor={id}>{label}</label> : null}
      {isError ? <p className="error-message">{errorMessage}</p> : null}
      <input
        {...props}
        id={id}
        className={classNames({ input: true })}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
