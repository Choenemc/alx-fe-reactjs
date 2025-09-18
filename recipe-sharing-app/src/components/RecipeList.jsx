import { link } from 'reach-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((s) => s.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
