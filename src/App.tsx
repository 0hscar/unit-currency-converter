import React, { useState, ChangeEvent } from "react";
import "./App.css";
import { convertUnit } from "./conversions/unitConversions";

function App() {
  const [value, setValue] = useState<string>();
  const [from, setFrom] = useState<string>();
  const [to, setTo] = useState<string>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>TJONG</h1>
      <input value={value} onChange={handleInputChange} />
      <p>{value}: Value check</p>
      <select></select>
      <p>{convertUnit("10", "km", "miles")}</p> {/* Temp test */}
    </div>
  );
}

export default App;
