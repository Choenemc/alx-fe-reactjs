import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
              <Link to={`/recipes/${recipe.id}`}>
                <button>View</button>
              </Link>
              <Link to={`/edit/${recipe.id}`}>
                <button>Edit</button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
