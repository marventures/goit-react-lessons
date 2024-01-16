import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../data/recipes.json';

export const App = () => {
  return <RecipeList recipes={recipes} />;
};
