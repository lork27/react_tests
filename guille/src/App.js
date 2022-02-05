import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ListState name="California" />
      <ListState name="New York" />
      <ListState name="Madrid" obj={{ age: 20 }} />
      <ListState />
      <ListState />
      <ListState />
    </div>
  );
}

function ListState({ name = "Placeholder", obj = { age: 10 } }) {
  return (
    <ul>
      <li>
        {name} and {obj.age}
      </li>
    </ul>
  );
}

export default App;
