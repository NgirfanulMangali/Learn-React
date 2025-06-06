import { useState } from "react";

export default function Form() {
  const [first, setfirst] = useState('');
  const [last, setlast] = useState('');

  function handleFirstNameChange(e) {
    setfirst(e.target.value)
  }

  function handleLastNameChange(e) {
    setlast(e.target.value)
  }

  function handleReset() {
    setfirst('')
    setlast('')
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={first}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={last}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {first} {last}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
