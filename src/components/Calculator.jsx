import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (e) => {
    setInput(input + e.target.name);
  };

  const clear = () => {
    setInput("");
    setResult(0);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  const buttonData = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    ["0", "/", "C", "="],
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold text-white opacity-1 mb-6 text-center">
          Calculator
        </h1>
        <div className="mb-6">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-4 text-right text-white text-2xl font-medium bg-gray-700 rounded-lg shadow-sm  border border-gray-600"
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttonData.map((row, rowIndex) =>
            row.map((btn, colIndex) => {
              const isOperator = ["+", "-", "*", "/"].includes(btn);
              const isAction = btn === "C" || btn === "=";
              return (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  name={btn}
                  onClick={
                    btn === "C" ? clear : btn === "=" ? calculate : handleClick
                  }
                  className={`p-4 ${
                    isOperator
                      ? "bg-blue-500 hover:bg-blue-600"
                      : isAction
                      ? btn === "C"
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                      : "bg-gray-700 hover:bg-gray-600"
                  } text-white rounded-lg text-xl transition-all duration-200`}
                >
                  {btn}
                </button>
              );
            })
          )}
        </div>
        <h2 className="text-xl font-semibold mt-6 text-center text-white border-white border border-solid rounded-lg py-5 ">
          Result: <span className="text-blue-400">{result}</span>
        </h2>
      </div>
    </div>
  );
};

export default Calculator;
