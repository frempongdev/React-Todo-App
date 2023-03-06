/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

const TodoList = ({ todosProps, setTodos }) => (
  <ul>
    {todosProps.map((todo) => <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} />)}
  </ul>
);

export default TodoList;
