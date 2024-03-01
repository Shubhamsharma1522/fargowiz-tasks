import React, { useState } from 'react';
import './styles.css';

const Ui = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>1</td>
            <td>Alphabet</td>
          </tr>
          <tr>
            <td>B</td>
            <td>2</td>
            <td>Alphabet</td>
          </tr>
          <tr>
            <td>C</td>
            <td>3</td>
            <td>Alphabet</td>
          </tr>
        </tbody>
      </table>
      <button id="toggleButton" onClick={toggleMode}>{ isDarkMode ? "Light" : "Dark"}</button>
    </div>
  );
};

export default Ui;
