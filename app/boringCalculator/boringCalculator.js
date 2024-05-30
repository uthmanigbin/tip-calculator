"use client";
import { useState } from "react";

const BoringCalculator = () => {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression).toString();
        setResult(evalResult)
        setExpression(evalResult)
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
      setExpression('');
    } else {
        setExpression((prevExpression) => prevExpression + value)
    }
  };

  const buttons = [
    "7", "8", "9", "/", 
    "4", "5", "6", "*", 
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', 
];  
  return (
    <main>
      <h1 className="my-14 text-center text-3xl font-bold uppercase tracking-widest text-purple-600">
        Boring Calculator
      </h1>
      <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-lg">
        <input
          type="text"
          className="w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none"
          value={expression}
          readOnly
        />
        <input
          type="text"
          className="w-full text-4xl font-bold mb-4 focus-outline"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
            {buttons.map((btn) => (
                <button
                    key={btn}
                    onClick={() => handleButtonClick(btn)}
                    className="text-4xl bg-gray-300 hover:bg-gray-400 p-2 rounded-lg"
                >
                    {btn}
                </button>
            ))}
        </div>
      </div>
    </main>
  );
};

export default BoringCalculator;
