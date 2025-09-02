import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1>User Profiles</h1>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="A software engineer who enjoys cooking" 
      />
      <UserProfile 
        name="Charlie" 
        age="28" 
        bio="Traveler and coffee enthusiast" 
      />
    </div>
  );
}

export default App;
