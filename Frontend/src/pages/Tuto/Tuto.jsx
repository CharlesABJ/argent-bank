import { useState } from "react";
import Parent from "../../components/Parent";

function Tuto() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const handleStart = () => {
    setStart("« Bonjour l'enfant »");
  };
  return (
    <div className="Tuto">
      <h1> Grand parent</h1>
      <button onClick={handleStart}>Message à l'enfant</button>
      L'enfant a répondu ceci : {end}
      <Parent dataStart={start} dataSetEnd={setEnd} />
    </div>
  );
}

export default Tuto;
