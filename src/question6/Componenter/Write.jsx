import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Read from "./Read";

export default function Write() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const write = useSelector((state) => state.write);

  function handleAdd() {
    dispatch(addUser(input));
  }

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Textarea</button>

      <h2>Resultat</h2>
      {text.map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </div>
  );
}
