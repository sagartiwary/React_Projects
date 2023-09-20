import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const checkPrime = (n) => {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  return (
    <div className="max-w-md mx-auto border border-gray-300 p-4 mt-6 shadow-lg hover:shadow-gray-400">
      <div>
        <h1 className="text-center text-4xl font-semibold pb-4 text-white">
          Counter App
        </h1>
        <div className="flex justify-center items-center space-x-5 mb-4">
          <span className="text-2xl text-white" data-testid="counter">{counter}</span>

          <span className="text-2xl text-white font-bold" data-testid="odd-or-even">{`${
            counter % 2 === 0 ? "Even" : "Odd"
          }`}</span>
          <span data-testid="is-prime" className="text-2xl font-bold text-white">{`${
            checkPrime(counter) ? "Prime" : "Not Prime "
          }`}</span>
        </div>

        <div className="flex justify-center sm:items-center space-x-5">
          <button
            className="border border-gray-200 px-2 py-1 rounded text-white bg-green-600"
            data-testid="minusonebtn"
            onClick={() => setCounter(counter + 1)}
          >
            Increment
          </button>
          <button
            className="border border-gray-200 px-2 py-1 rounded text-white bg-red-600"
            data-testid="plusonebtn" disabled={counter<1}
            onClick={() => setCounter(counter - 1)}
          >
            Decrement
          </button>
          <div>
            <button
              onClick={() => setCounter(0)}
              data-testid="resetbtn"
              className="border border-gray-200 px-2 py-1 rounded text-white bg-blue-600"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
