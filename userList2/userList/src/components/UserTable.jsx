import React from "react";
import UserRow from "./UserRow.jsx";

const UserTable = ({ users }) => {
  const limitedUsers = users.slice(0, 10);
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {limitedUsers.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
