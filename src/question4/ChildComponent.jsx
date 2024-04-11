export default function ChildComponent({ handleName }) {
  return (
    <div>
      <input type="Helena" />
      <select onChange={(e) => handleName(e.target.value)}>
        <option value="mittnamn">Helena</option>
      </select>
    </div>
  );
}
