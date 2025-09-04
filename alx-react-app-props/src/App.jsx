import React, { useState } from "react";
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane@example.com",
    
  });

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;