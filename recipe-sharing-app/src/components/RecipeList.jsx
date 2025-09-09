import useRecipeStore from "./recipeStore";

const RecipteList = () => { 
    const recipes = useRecipeStore ((state) => state.recipes);

    return (
        <div style={{ margintop: "20px"}}>
            <h2>Recipes</h2>
            {recipes.length === 0 ? (
                <p>No recipes yet. Add one!</p>
            ) : (
                recipes.map((recipe) => (
                    <div 
                    key={recipe.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        marginBottom: "10px",
                        bprderRadius: "5px",
                    }}
                    >
                        <h3>{recipe.title}</h3>
                        <p>{recipe.discription}</p>
                        </div>
                ))
             )}
            
        </div>
    );
};