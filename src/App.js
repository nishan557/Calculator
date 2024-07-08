import React, { useState } from 'react';
import './App.css';

export default function App() {
  let [equation, setEquation] = useState('');
  let handleInput = (e) => {
    setEquation(equation + e.target.value);
  };

  const handleEqual = () => {
    try {
      equation = eval(equation);
      setEquation(equation);
    } catch (error) {
      setEquation('Error');
    }
  };

  const handleClear = () => {
    setEquation('');
    setEquation('');
  };

  return (
    <div className="container">
      <div className="Maindiv">
        <div>
          <input type="text" value={equation} onChange={handleInput} />
        </div>
        <br />
        <div className="subdiv">
          <button onClick={() => handleInput({ target: { value: '0' } })}>0</button>
          <button onClick={() => handleInput({ target: { value: '1' } })}>1</button>
          <button onClick={() => handleInput({ target: { value: '2' } })}>2</button>
          <button onClick={() => handleInput({ target: { value: '3' } })}>3</button>
          <button onClick={() => handleInput({ target: { value: '4' } })}>4</button>
          <button onClick={() => handleInput({ target: { value: '5' } })}>5</button>
          <button onClick={() => handleInput({ target: { value: '6' } })}>6</button>
          <button onClick={() => handleInput({ target: { value: '7' } })}>7</button>
          <button onClick={() => handleInput({ target: { value: '8' } })}>8</button>
          <button onClick={() => handleInput({ target: { value: '9' } })}>9</button>
          <button onClick={() => handleInput({ target: { value: '+' } })} className='operator'>+</button>
          <button onClick={() => handleInput({ target: { value: '-' } })} className='operator'>-</button>
          <button onClick={() => handleInput({ target: { value: '*' } })} className='operator'>*</button>
          <button onClick={() => handleInput({ target: { value: '/' } })} className='operator'>/</button>
          <button onClick={() => handleInput({ target: { value: '%' } })} className='operator'>%</button>
          <br />
          <button className='operator' onClick={handleEqual}>=</button>
          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </div>
  );
}
