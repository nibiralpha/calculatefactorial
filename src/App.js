import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [factorial, setFactorial] = useState(0);

  function submitHandler(e) {
    e.preventDefault();
    if (number == "") {
      alert("Please enter a number");
      return
    }
    setFactorial(calculateFacorial(number));
  }

  function onChangeNumber(e) {
    setNumber(e.target.value);
  }

  function calculateFacorial(num) {

    if (num === 0) {
      return 1;
    }
    return num * calculateFacorial(num - 1);
  }

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form onSubmit={submitHandler}>
        <input type="number" placeholder="Enter a number..." onChange={onChangeNumber} />
        <br />
        <button>Calculate Factorial</button>
      </form>
      <h2>Factorial: {factorial}</h2>
    </div>
  );
}

export default App;
