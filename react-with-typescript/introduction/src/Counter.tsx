import React from "react";

// Option 1
type Props = {
  value: number;
  onChange?: (vslue: number) => void;
}

// 

export const Counter: React.FC<Props> = ({
  value,
  onChange = () => {}, // if parameter is optional
}) => (
  <div className="box">
    <button onClick={() => onChange(value - 1)}>-</button>
    {value}
    <button onClick={() => onChange(value + 1)}>+</button>
  </div>
);