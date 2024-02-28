import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {
  const [input, setInput] = useState("");

  // function to handle button clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // funtion to evaluate the input expression
  const calcResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Wrong");
    }
  };

  //function to clear the input
  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <Display input={input} />

      <div className="buttons">
        <Button onClick={handleClick} label="1" />
        <Button onClick={handleClick} label="2" />
        <Button onClick={handleClick} label="3" />
        <Button onClick={handleClick} label="+" />
      </div>
      <div className="buttons">
        <Button onClick={handleClick} label="4" />
        <Button onClick={handleClick} label="5" />
        <Button onClick={handleClick} label="6" />
        <Button onClick={handleClick} label="-" />
      </div>
      <div className="buttons">
        <Button onClick={handleClick} label="7" />
        <Button onClick={handleClick} label="8" />
        <Button onClick={handleClick} label="9" />
        <Button onClick={handleClick} label="*" />
      </div>
      <div className="buttons">
        <Button onClick={handleClick} label="0" />
        <Button onClick={handleClick} label="." />
        <Button onClick={calcResult} label="=" />

        <Button onClick={clearInput} label="C" />
      </div>
    </div>
  );
};

export default App;
