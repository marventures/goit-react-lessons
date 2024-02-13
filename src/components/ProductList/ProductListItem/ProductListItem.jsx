import { Link } from 'react-router-dom';
import css from './ProductListItem.module.css';

export const ProductListItem = ({ id, name }) => {
  return (
    <li className={css.cardWrapper}>
      <Link to={`${id}`}>
        <img src="https://via.placeholder.com/200x100" alt="" />
        <h3 className={css.productName}>{name}</h3>
      </Link>
    </li>
  );
};
