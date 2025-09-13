import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>🍲 Recipe Sharing App</h1>

        {/* Search bar at the top */}
        <SearchBar />

        <Routes>
          {/* Home route → shows add form + recipe list */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          {/* Recipe details page */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />

          {/* Edit recipe page */}
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
