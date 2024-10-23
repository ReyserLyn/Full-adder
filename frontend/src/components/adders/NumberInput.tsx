import React from "react";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  ans?: boolean;
  label?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  ans = false,
  label,
}) => {
  return (
    <div>
      <label>
        {label}:
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          required
        />
      </label>
    </div>
  );
};

export default NumberInput;
