function TodoTable({ todos, deleteTodo }) {
  return (
    <table>
      <tbody>
        <tr>
          <th id="date">Date</th>
          <th id="desc">Description</th>
        </tr>
        {todos.map((todo, index) => (
          <tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.desc}</td>
            <td>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
