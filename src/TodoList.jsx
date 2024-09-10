import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setDesc("");
    setDate("");
    setTodos([...todos, { description: desc, date }]);
  };

  const deleteTodo = (indexToDelete) => {
    const filteredTodo = todos.filter((_, index) => index !== indexToDelete);
    setTodos(filteredTodo);
  };

  return (
    <div>
      <h2 className="heading">Simple Todolist</h2>
      <div className="todo-adding-box">
        <p className="floating-title">Add todo:</p>
        <label>Description:</label>
        <input onChange={(e) => setDesc(e.target.value)} value={desc} />
        <label>Date:</label>
        <input onChange={(e) => setDate(e.target.value)} value={date} />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoList;
