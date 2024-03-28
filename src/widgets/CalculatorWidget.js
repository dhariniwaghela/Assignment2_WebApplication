import React, { useState } from "react";

import "../styles/Dashboard.css"; // Import custom style
const CalculatorWidget = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setExpression(event.target.value);
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(expression); // Using eval here, but beware of potential security risks
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-widget">
      <h3>Calculator</h3>
      <input
        type="text"
        value={expression}
        onChange={handleInputChange}
        placeholder="Enter expression"
      />
      <button onClick={calculateResult}>Calculate</button>
      <div className="result">{result}</div>
    </div>
  );
};

export default CalculatorWidget;
