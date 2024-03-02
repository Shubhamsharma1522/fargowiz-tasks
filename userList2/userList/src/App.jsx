import React from "react";
import "./App.css";
import { DATA } from "./data.js";

function CoreConcept({ id, title, body }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body + title}</td>
    </tr>
  );
}

function App() {
  const limitedData = DATA.slice(0, 10);
  return (
    <div className="App">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {limitedData.map((user) => (
              <CoreConcept key={user.id} {...user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
