import { create } from "zustand";

const useRecipeStore = create((set => ({
    recipte : [],
    addRecipe : (newrecipe) => set(state => ({recipte: [...state.recipe,newRecipe] })),
    setRecipes: (recipes) => set ({recipes})
})))

