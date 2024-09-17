import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {
  const [todo, setTodo] = useState({ desc: "", date: "" });
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo.desc || !todo.date) {
      alert("Please input missing info");
    } else {
      setTodos([todo, ...todos]);
      setTodo({ desc: "", date: "" });
    }
  };

  const deleteTodo = (indexToDelete) => {
    const filteredTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <h2 className="heading">Simple Todolist</h2>
      <div className="todo-adding-box">
        <p className="floating-title">Add todo:</p>
        <label>Description:</label>
        <input
          onChange={(e) => setTodo({ ...todo, desc: e.target.value })}
          value={todo.desc}
        />
        <label>Date:</label>
        <input
          onChange={(e) => setTodo({ ...todo, date: e.target.value })}
          value={todo.date}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoList;
