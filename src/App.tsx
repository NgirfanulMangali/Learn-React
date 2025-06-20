import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(""); // menyimpan input dari user
  const [displayValue, setDisplayValue] = useState(""); // menyimpan data yang akan ditampilkan

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // update nilai input secara live
  };

  const handleButtonClick = () => {
    setDisplayValue(inputValue); // pindahkan input ke tampilan
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Tulis sesuatu"
      />
      <button onClick={handleButtonClick}>Tampilkan</button>
      <p>Hasil: {displayValue}</p>
    </div>
  );
}

export default App;
