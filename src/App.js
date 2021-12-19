import Form from "./component/Form";
import Todos from "./component/Todos";
import NavBar from "./component/Navbar";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    const todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, todo]);
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function completeTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      })
    );
  }

  return (
    <>
      <NavBar lengthTodo={todos.length} />
      <div className="container with-nav">
        <div className="card">
          <h2>Список задач</h2>
          <Form onAdd={addTodo} />
          <hr />
          <Todos
            todos={todos}
            onRemove={removeTodo}
            onComplete={completeTodo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
