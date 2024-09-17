import { useState, useRef } from "react";
// import TodoTable from "./TodoTable";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function TodoList() {
  const [todo, setTodo] = useState({ desc: "", date: "", priority: "" });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const [columnDefs] = useState([
    { field: "desc", sortable: false, filter: true, floatingFilter: true },
    {
      field: "priority",
      filter: true,
      floatingFilter: true,
      cellStyle: (params) =>
        params.value === "High" ? { color: "red" } : { color: "black" },
    },
    { field: "date", filter: true, floatingFilter: true },
  ]);

  const addTodo = () => {
    if (!todo.desc || !todo.date) {
      alert("Please input missing info");
    } else {
      setTodos([todo, ...todos]);
      setTodo({ desc: "", date: "", priority: "" });
    }
  };

  const handleDelete = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(
        todos.filter(
          (_, index) => index != gridRef.current.getSelectedNodes()[0].id
        )
      );
    } else {
      alert("Select a row first!");
    }
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
        <label>Priority</label>
        <input
          onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
          value={todo.priority}
        />
        <label>Date:</label>
        <input
          onChange={(e) => setTodo({ ...todo, date: e.target.value })}
          value={todo.date}
          type="date"
        />
        <button onClick={addTodo}>Add</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div
        className="ag-theme-material"
        style={{ width: 700, height: 500, margin: "auto" }}
      >
        <AgGridReact
          ref={gridRef}
          onGridReady={(params) => (gridRef.current = params.api)}
          rowData={todos}
          columnDefs={columnDefs}
          rowSelection="single"
        />
      </div>
    </div>
  );
}

export default TodoList;
