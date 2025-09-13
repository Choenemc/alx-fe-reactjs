import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{ padding: '8px', margin: '10px 0', width: '100%' }}
    />
  );
};

export default SearchBar;
