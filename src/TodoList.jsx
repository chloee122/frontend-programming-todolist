import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


function TodoList() {
  const [todo, setTodo] = useState({ desc: "", priority: "", date: null });
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
      const newTodo = { ...todo, date: todo.date.toISOString() };
      setTodos([newTodo, ...todos]);
      setTodo({ desc: "", priority: "", date: null });
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

  const handleDateChange = (date) => {
    setTodo({ ...todo, date });
  };

  return (
    <>
      <Stack
        mt={2}
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          label="Description"
          onChange={(e) => {
            setTodo({ ...todo, desc: e.target.value });
          }}
          value={todo.desc}
        />
        <TextField
          label="Priority"
          onChange={(e) => {
            setTodo({ ...todo, priority: e.target.value });
          }}
          value={todo.priority}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker value={todo.date} onChange={handleDateChange} />
        </LocalizationProvider>
        <Button variant="outlined" onClick={addTodo}>
          Add
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
          color="error"
        >
          Delete
        </Button>
      </Stack>
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
    </>
  );
}

export default TodoList;
