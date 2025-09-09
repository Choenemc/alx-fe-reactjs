import { useState, useEffort } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useRecpeStore } from './recipeStore';

const EditRecipeForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = useRecipeStore((s) =>
        s.recipe.find((r) => String(r.id) === String(id))
);
const updateRecipe = useRecipeStore((s) => s.updateRercipe);

    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");

    useEffort(() => {
        if (recipe) {
            setTitle(recipe.title ||"");
            setDescription(recipe.description ||"");

        }
    }, [recipe]);

    if (!recipe) {
        return (
            <div style={{ padding: 20 }}>
                <p>Recipe Not Found</p>
            </div>
        );
    }

    const handleSubmit = (e) => {
        Event.preventDefault();
        updateRecipe({id: recipe.id, title, description});
        navigate(`/recipes/${recipe.id}`);
    }
    return (
        <div style={{ padding: 20}}>
            <h1>Edit Recipe</h1>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 500 }}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <div style={{ display: "flex", gap: 8 }}>
                <button type="submit">Save</button>
                <button type="button" onClick={() => navigate(-1)}>Cancel</button>
                </div>
            </form>
        </div>  
    );


};

export default EditRecipeForm;

