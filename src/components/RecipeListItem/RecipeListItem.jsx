import PropTypes from 'prop-types';
import css from './RecipeListItem.module.css';
import { CiClock1 } from 'react-icons/ci';
import { FaChartPie } from 'react-icons/fa';

export const RecipeListItem = ({
  name,
  time,
  servings,
  calories,
  image,
  difficulty,
  isEasy,
}) => {
  const dynamicClassName = isEasy ? css.easy : css.notEasy;

  return (
    <li className={css.recipeListItem}>
      <img src={image} alt="" width="240" />
      <h2>{name}</h2>

      <div className={css.recipeInfo}>
        <div className={css.infoBlock}>
          <CiClock1 />
          <p>{time} minutes</p>
        </div>

        <div className={css.infoBlock}>
          <FaChartPie className={css.pieIcon} />
          <p>{servings} servings</p>
        </div>

        <div className={css.infoBlock}>
          <span>Icon</span>
          <p>{calories} calories</p>
        </div>

        <div className={css.infoBlock}>
          <p>Difficulty: {difficulty}</p>
        </div>

        <span className={dynamicClassName}></span>
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
