import { SearchBar } from 'components/SearchBar/SearchBar';
import { ProductList } from '../../components/ProductList/ProductList';
import { getProducts } from '../../services/fakeAPI';
import { useSearchParams } from 'react-router-dom';

const ProductsPage = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  // JavaScript Syntax Descriptions that might be helpful:
  // ( ?? ) Nullish Coallescing,
  //      - if expression on the left is null or undefined will return ''
  const productName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  return (
    <main>
      <SearchBar value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
};

export default ProductsPage;
