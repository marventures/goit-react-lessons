import { useParams, useLocation, Link } from 'react-router-dom';
import { getProductById } from '../../services/fakeAPI';
import { Button } from 'components/Button/Button';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = getProductById(id);

  const location = useLocation();

  // JavaScript Syntax Descriptions that might be helpful:

  // ( ?. ) optional chaining
  //    location.state
  //      - is undefined -> will return undefined, will stop chaining
  //      - is defined -> access from property on .from

  // ( ?? ) Nullish Coallescing,
  //      - if expression on the left is null or undefined will return '/products'

  const backLinkHref = location.state?.from ?? '/products';

  return (
    <main>
      <Link to={backLinkHref}>
        <Button text="Go Back" />
      </Link>

      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
