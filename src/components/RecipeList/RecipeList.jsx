import PropTypes from 'prop-types';
import { RecipeListItem } from 'components/RecipeListItem/RecipeListItem';

import s from './RecipeList.module.css';

export const RecipeList = ({ recipes }) => {
  return (
    <ul className={s.recipeList}>
      {recipes.map(
        ({ id, name, time, servings, calories, image, difficulty, isEasy }) => (
          <RecipeListItem
            key={id}
            name={name}
            time={time}
            servings={servings}
            calories={calories}
            image={image}
            difficulty={difficulty}
            isEasy={isEasy}
          />
        )
      )}
    </ul>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
