function TodoTable({ todos, deleteTodo }) {
  return (
    <table>
      <tbody>
        <tr>
          <th id="date">Date</th>
          <th id="desc">Description</th>
        </tr>
        {todos.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.description}</td>
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
