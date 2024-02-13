import css from './ProductList.module.css';
import { ProductListItem } from './ProductListItem/ProductListItem';

export const ProductList = ({ products }) => {
  return (
    <ul className={css.container}>
      {products.map(({ id, name }) => (
        <ProductListItem key={id} id={id} name={name} />
      ))}
    </ul>
  );
};
