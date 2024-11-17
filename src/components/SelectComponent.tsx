import React, { useState } from "react";
import Select from "react-select";
import { Option } from "../types";

interface compProps {
  id: string;
  onValueChange?: (value: Option | null) => void;
}

const options: Option[] = [
  { value: "C", label: "Celsius" },
  { value: "F", label: "Fahrenheit" },
  { value: "K", label: "Kelvin" },
  { value: "km", label: "Kilometers" },
  { value: "miles", label: "Miles" },
  { value: "kg", label: "Kilograms" },
  { value: "lbs", label: "Pounds" },
];

export const SelectComponent = ({ id, onValueChange }: compProps) => {
  const [selected, setSelected] = useState<Option | null>(null);

  const handleChange = (newValue: Option | null) => {
    setSelected(newValue);
    onValueChange?.(newValue);
  };

  return (
    <Select
      id={id}
      value={selected}
      onChange={handleChange}
      options={options}
    />
  );
};
