import React, { useState, ChangeEvent } from "react";
import { Option } from "./types";
import { SelectComponent } from "./components/SelectComponent";
import "./App.css";
import { convertUnit } from "./conversions/unitConversions";

function App() {
  const [value, setValue] = useState<number>();
  const [from, setFrom] = useState<Option | null>(null);
  const [to, setTo] = useState<Option | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  const handleFromChange = (value: Option | null) => {
    setFrom(value);
    console.log("From value: ", value);
  };

  const handleToChange = (value: Option | null) => {
    setTo(value);
    console.log("To value: ", value);
  };

  return (
    <div className="App">
      <h1>TJONG</h1>
      <SelectComponent id="from" onValueChange={handleFromChange} />
      <SelectComponent id="to" onValueChange={handleToChange} />
      <input value={value} onChange={handleInputChange} />
      <p>{value}: Value check</p>
      {/* <Select value={from} onChange={handleChange} options={options} />{" "} */}
      {/* From */}
      {/* <Select options={options} /> {/* To */}
      <p>{convertUnit(value, from?.value, to?.value)}</p> {/* Temp test */}
    </div>
  );
}

export default App;
