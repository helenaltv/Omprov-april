export default function ChildComponent2({ handleName }) {
  return (
    <div>
      <select onChange={(e) => handleName(e.target.value)}>
        <option value="mittnamn">Helena</option>
        <option value="andranamn">Alex</option>
        <option value="tredjenamn">Tina</option>
      </select>
    </div>
  );
}
