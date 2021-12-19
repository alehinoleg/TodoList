export default function Todo({ todo, onRemove, onComplete }) {
  return (
    <li className="list-item">
      <label>
        <input
          type="checkbox"
          onChange={() => onComplete(todo.id)}
          checked={todo.completed}
        />
        <span className={todo.completed ? "done" : ""}>{todo.title}</span>
      </label>
      <button className="btn danger" onClick={() => onRemove(todo.id)}>
        <span>&times;</span>
      </button>
    </li>
  );
}
