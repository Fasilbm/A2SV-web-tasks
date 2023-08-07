import React, { useState, useEffect, useRef } from 'react';

function CounterApp() {
  const [counter, setCounter] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter-app">
      <h1 className="counter-title">Counter: {counter}</h1>
      <div className="button-container">
        <button ref={buttonRef} className="increment-button" onClick={incrementCounter}>
          Increment
        </button>
        <button className="decrement-button" onClick={decrementCounter}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterApp;