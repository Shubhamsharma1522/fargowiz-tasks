import React from "react";
import "./App.css";

import UserTable from "./components/UserTable.jsx";

function App() {
  const userss = [
    {
      id: 1,
      title: "virat",
      body: "Cricketer",
    },
    {
      id: 2,
      title: "Dhoni",
      body: "Cricketer",
    },
    {
      id: 3,
      title: "Rahul",
      body: "Cricketer",
    },
    {
      id: 4,
      title: "abc",
      body: "cba",
    },
    {
      id: 5,
      title: "abcd",
      body: "dcba",
    },
    {
      id: 6,
      title: "ABCDE",
      body: "edcba",
    },
    {
      id: 7,
      title: "abcdef",
      body: "fedcba",
    },
    {
      id: 8,
      title: "abcdefg",
      body: "gfedcba",
    },
    {
      id: 9,
      title: "abcdefgh",
      body: "hgfedcba",
    },
    {
      id: 10,
      title: "abcdefghi",
      body: "ihgfedcba",
    },
    {
      id: 11,
      title: "abcdefghj",
      body: "jhgfedcba",
    },
  ];

  return (
    <div className="App">
      <h1>List of Users</h1>
      <UserTable useres={userss} />
    </div>
  );
}

export default App;
