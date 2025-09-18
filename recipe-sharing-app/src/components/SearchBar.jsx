import { useRecipeState } from './recipeStore';

const searchRecipes = () => {
    const setSearchTerm = useRecipeState((s) => s.setSearchTerm);

    return (
        <input 
            type= "text"
            placeholder= "Search rrecipes..."
            onChange= {(e) => setSearchTerm(e.target.value)}
            style= {{ padding: "8px", margin: "10px 0", width: "100%" }}
            />

    )
}

export default searchBar; 