export function TodoItem({ text, completed, del }) {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      <span>{text}</span>
      <button onClick={del}>x</button>
    </li>
  );
}
