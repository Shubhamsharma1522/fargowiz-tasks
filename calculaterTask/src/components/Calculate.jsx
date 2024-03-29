import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

import React from "react";

const Calculate = () => {
  const [input, setInput] = useState("");

  // function to handle button clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
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

      <div style={{ backgroundColor: "red", textAlign: "right" }}>
        <Button onClick={clearInput} label="C" />
      </div>
      <div className="buttons">
        <Button onClick={handleClick} label="1" />
        <Button onClick={handleClick} label="2" />
        <Button onClick={handleClick} label="3" />
        <Button onClick={handleBackspace} label="<=" />
      </div>
      <div className="buttons">
        <Button onClick={handleClick} label="4" />
        <Button onClick={handleClick} label="5" />
        <Button onClick={handleClick} label="6" />
        <Button onClick={handleClick} label="+" />
      </div>
      <div className="buttons">
        <Button onClick={handleClick} label="7" />
        <Button onClick={handleClick} label="8" />
        <Button onClick={handleClick} label="9" />
        <Button onClick={handleClick} label="-" />
      </div>
      <div className="buttons">
        <Button onClick={handleClick} label="0" />
        <Button onClick={handleClick} label="." />
        <Button onClick={handleClick} label="*" />
        <Button onClick={calcResult} label="=" />
      </div>
    </div>
  );
};

export default Calculate;
