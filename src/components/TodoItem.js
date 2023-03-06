const TodoItem = ({ itemProp, setTodos }) => {
  const handleChange = (id) => {
    // console.log(25);
    setTodos((prevState) => {
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  return (
    <li>
      <input type="checkbox" checked={itemProp.completed} onChange={() => { handleChange(itemProp.id); }} />
      {itemProp.title}
    </li>
  );
};

export default TodoItem;
