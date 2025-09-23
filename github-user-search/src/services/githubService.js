import axios from "axios";

// Function 1: main fetch for multiple users
export const fetchUsers = async ({ username, location, minRepos }) => {
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );

  const users = response.data.items;

  // Fetch extra info for each user
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const details = await axios.get(user.url);
      return details.data;
    })
  );

  return detailedUsers;
};

// Function 2: fetch single user data
export const fetchUserData = async (username) => {
  if (!username) throw new Error("Username is required");

  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

