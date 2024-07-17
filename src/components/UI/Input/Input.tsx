import './style.css';
import { InputProps } from '../../../static/types';
import classNames from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

const Input = forwardRef(
  (
    {
      id = '',
      type = 'text',
      isError = false,
      errorMessage = '',
      placeholder,
      label = null,
      checked,
      register,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    if (type === 'radio') {
      return (
        <div
          className={classNames({
            'radio-input-wrapper': true,
            error: isError,
          })}
        >
          <input
            ref={ref}
            {...props}
            type="radio"
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
          ref={ref}
          {...props}
          id={id}
          className={classNames({ input: true })}
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  },
);

export default Input;
