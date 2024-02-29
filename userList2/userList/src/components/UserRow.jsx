import React from "react";

const UserRow = ({userr }) => {
  return (
    <tr>
      <td>{userr.id}</td>
      <td>{userr.title}</td>
      <td>{userr.body}</td>
    </tr>
  );
};

export default UserRow;
