import { ProductList } from '../../components/ProductList/ProductList';
import { getProducts } from '../../services/fakeAPI';

export const ProductsPage = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
