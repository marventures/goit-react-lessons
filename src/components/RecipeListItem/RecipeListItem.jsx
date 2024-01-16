import PropTypes from 'prop-types';
export const RecipeListItem = ({
  name,
  time,
  servings,
  calories,
  image,
  difficulty,
}) => {
  const isLoggedIn = true;

  return (
    <li>
      {/* Ternary */}
      {isLoggedIn ? <p>User is Logged In</p> : <p>User is Logged Out</p>}

      {/* Logical And */}
      {isLoggedIn && <p>User is Logged In</p>}

      <img src={image} alt="" width="240" />
      <h2>{name}</h2>

      <div>
        <div>
          <span>Icon</span>
          <p>{time} minutes</p>
        </div>

        <div>
          <span>Icon</span>
          <p>{servings} servings</p>
        </div>

        <div>
          <span>Icon</span>
          <p>{calories} calories</p>
        </div>

        <div>
          <h3>Difficulty</h3>
          <div>
            <span>Easy</span>
            <span>Medium</span>
            <span>Hard</span>
          </div>
        </div>
      </div>
    </li>
  );
};

RecipeListItem.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
};
