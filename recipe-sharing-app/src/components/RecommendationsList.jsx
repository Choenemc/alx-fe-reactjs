import { useEffect }  from "react";
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
    const recomandations = useRecipeStore((State) => state.recommandations);
    const generateRecommandations = useRecipeStore((state) => state.generateRrecommandations
);

useEffect(() => {
    generateRecommandations();

}, [generateRecommanndations]);

if (recommandations.length ===0) {
    return <p style={{ padding: 20 }}>No Recommandations yet</p>;
}

return ( 
    <div style={{ padding: 20 }}>
        <h2>Recommadations for you</h2>
        {recommndations.map((recipe) => (
            <div key={recipe.id} style={{ marginBottom: 15 }}>
                <h3>{recipe}</h3>
                <p>{recipe.discription}</p>
            </div>
        ))}
    </div>
)
}

export default RecommandationsList;