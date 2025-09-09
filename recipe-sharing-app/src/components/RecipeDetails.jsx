import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetalis = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = useRecipeStore((s) =>
        s.recipe.find((r) => String(r.id) === id));

    if (!recipe) {
        return (
            <div style={{ padding: "20px"}}>
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>

                <div style= {{ marginTop: 12, display: "flex", gap: 10}}>
                    <link to={`/edit/${recipe.id}`}>
                    <button>Edit</button>
                    </link>
                    
                    <DeleteRercipeButton rrecipeId={recpite.id} onDelete={() => navigate("/")}/>
                </div>
            </div>
        )
    }
}
