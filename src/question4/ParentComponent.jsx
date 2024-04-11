import ChildComponent from "./ChildComponent";
import ChildComponent2 from "./ChildComponent2";
import { useState } from "react";

export default function ParentComponent() {
  const [name, setName] = useState("");
  const ChangeName = (newName) => {
    setName(newName);
  };

  function handleName(name) {
    setName(name);
  }

  return (
    <div>
      <p>Name: {name}</p>
      <ChildComponent handleName={handleName} />

      <p>Ändra namnet: {name}</p>
      <ChildComponent2 ChangeName={ChangeName} />
    </div>
  );
}
