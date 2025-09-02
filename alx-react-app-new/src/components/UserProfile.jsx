import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
      </div>
       
  );
}

export default App;
