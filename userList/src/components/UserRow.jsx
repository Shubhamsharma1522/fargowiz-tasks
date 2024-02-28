import React from 'react';

const UserRow = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.title}</td>
      <td>{user.body}</td>
    </tr>
  );
}

export default UserRow;
