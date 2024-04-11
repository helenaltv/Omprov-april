// 3. Custom Hook useInput (3p)
// Skapa en hook useInput som tar hand om state för ett input-fält.
// useInput ska returnera funktionen för att uppdatera state och
// själva värdet från state.
// Använd sedan useInput i App-komponenten nedan för att spara det man
// skriver in i ett input-fält. Det man skriver in ska visas under inputfältet.

import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

function App() {
  const inputProps = useInput("");

  return (
    <div>
      <h2>Skriv här:</h2>
      <input type="text" {...inputProps} />
      <p>Input value: {inputProps.value}</p>
    </div>
  );
}

export default App;
