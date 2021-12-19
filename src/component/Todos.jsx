import Todo from "./Todo";

export default function Todos({ todos, onRemove, onComplete }) {
  if (todos.length === 0) {
    return <p>Задач пока нет....</p>;
  }

  return (
    <ul className="list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onComplete={onComplete}
        />
      ))}
    </ul>
  );
}
