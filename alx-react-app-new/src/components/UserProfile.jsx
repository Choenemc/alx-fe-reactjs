import UserProfile from "./components/UserProfile";

function App() {
  
  return (
    <div style={{ border:'1px solid gray', padding: '10px',  margin: '10 auto',  }}>
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      <p>Age: <span style={{fontweight: 'Bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
      </div>
       
  );
}

export default App;
