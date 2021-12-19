const NavBar = ({ lengthTodo }) => {
  function choiceEndings(lengthTodo) {
    if (lengthTodo > 4 || lengthTodo === 0) {
      return <p>В списке {lengthTodo} задач</p>;
    }

    if (lengthTodo === 1) {
      return <p>В списке {lengthTodo} задача</p>;
    }

    return <p>В списке {lengthTodo} задачи</p>;
  }

  return (
    <nav className="navbar">
      <h3>TodoList</h3>
      {choiceEndings(lengthTodo)}
    </nav>
  );
};

export default NavBar;
