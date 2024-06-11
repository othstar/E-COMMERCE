import { NavLink } from 'react-router-dom';
import { ButtonProps } from '../../static/types';
import './style.css';

const Button = ({
  children,
  isLink = false,
  dir,
  type = 'primary',
}: ButtonProps) => {
  if (isLink) {
    return (
      <NavLink to={dir} className={`btn btn-${type}`}>
        {children}
      </NavLink>
    );
  }
  return (
    <button className={`btn btn-${type}`} type="button">
      {children}
    </button>
  );
};

export default Button;
