import { useState } from "react";

export const App = () => {
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState('');

  console.log('rendering', value);

  return (
    <div className="App">
      <h1>Value is {value}</h1>

      <button 
        onClick={() => {
          setValue(1);
          console.log(value);
        }}
      >
        1
      </button>

      <button 
        onClick={() => {
          setValue(2);
          console.log(value);
        }}
      >
        2
      </button>

      <button 
        onClick={() => {
          setValue(3);
          console.log(value);
        }}
      >
        3
      </button>

    </div>
  )
};
