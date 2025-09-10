import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
   const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Delete this recipe?")) {
      deleteRecipe(recipeId);
      if (onDeleted) onDeleted();
      navigate("/");
    }
  };

  return <button onClick={handleDelete} 
  style={{ background: "#d9534f", color: "#fff" }}>Delete</button>;
};

export default DeleteRecipeButton;
