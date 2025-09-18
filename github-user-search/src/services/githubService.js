import axios from "axios";

export const fetchUsers = async ({ username, location, minRepos }) => {
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  // GitHub API returns results under response.data.items
  const users = response.data.items;

  // Fetch additional info for each user
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const details = await axios.get(user.url);
      return details.data;
    })
  );

  return detailedUsers;
};