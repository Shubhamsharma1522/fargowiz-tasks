import React, { useState, useEffect } from "react";
import UserTable from "./components/UserTable.jsx";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <UserTable users={users} />
    </div>
  );
};

export default App;
