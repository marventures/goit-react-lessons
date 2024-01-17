import PropTypes from 'prop-types';
import './RecipeListItem.css';

export const RecipeListItem = ({
  name,
  time,
  servings,
  calories,
  image,
  difficulty,
  isEasy,
}) => {
  return (
    <li className="recipe-list-item">
      <img src={image} alt="" width="240" />
      <h2>{name}</h2>

      <div className="recipe-info">
        <div className="info-block">
          <span>Icon</span>
          <p>{time} minutes</p>
        </div>

        <div className="info-block">
          <span>Icon</span>
          <p>{servings} servings</p>
        </div>

        <div className="info-block">
          <span>Icon</span>
          <p>{calories} calories</p>
        </div>

        <div className="info-block">
          <p>Difficulty: {difficulty}</p>
        </div>

        <span className="status"></span>
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
  isEasy: PropTypes.bool.isRequired,
};
