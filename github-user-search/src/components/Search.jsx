import { useState, useCallback } from "react";
import axios from "axios";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    if (!username) return;
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(res.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div className="p-4">
      <input
        className="border p-2"
        type="text"
        value={username}
        placeholder="Search GitHub user..."
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white"
        onClick={fetchUserData}
      >
        Search
      </button>

      {userData && (
        <div className="mt-4">
          <img src={userData.avatar_url} alt={userData.login} width={80} />
          <p>{userData.name || userData.login}</p>
          <p>{userData.bio}</p>
        </div>
      )}
    </div>
  );
}


export default Search;

