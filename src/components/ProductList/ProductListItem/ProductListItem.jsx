import { Link, useLocation } from 'react-router-dom';
import css from './ProductListItem.module.css';

export const ProductListItem = ({ id, name }) => {
  const location = useLocation();

  return (
    <li className={css.cardWrapper}>
      <Link to={`${id}`} state={{ from: location }}>
        <img src="https://via.placeholder.com/200x100" alt="" />
        <h3 className={css.productName}>{name}</h3>
      </Link>
    </li>
  );
};
