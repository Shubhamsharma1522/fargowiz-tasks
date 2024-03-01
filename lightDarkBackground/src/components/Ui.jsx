import React, { useState } from 'react';
import './styles.css';

const Ui = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <> 
    <div className={`main-container ${isDarkMode ? "themeLight-mode" : "themeDark-mode"}`}>

        <h1> {isDarkMode ? "Dark" : "Light"} Theme</h1>


       <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
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
      <button id="toggleButton" onClick={toggleMode}>{ isDarkMode ? "Dark => Light" : "Light => Dark"}</button>
    </div>
    </div>
    </>

  );
};

export default Ui;
