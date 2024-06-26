import { NavLink } from 'react-router-dom';
import { ButtonProps } from '../../../static/types';
import './style.css';

const Button = ({
  children,
  isLink = false,
  dir = '/',
  type = 'primary',
  onClick,
}: ButtonProps) => {
  if (isLink) {
    return (
      <NavLink to={dir} className={`btn btn-${type}`} onClick={onClick}>
        {children}
      </NavLink>
    );
  }
  return (
    <button onClick={onClick} className={`btn btn-${type}`} type="button">
      {children}
    </button>
  );
};

export default Button;
