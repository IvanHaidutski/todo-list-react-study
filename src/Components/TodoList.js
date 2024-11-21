import styles from "./TodoList.module.css";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo }) {
  return todos.map((todo) => (
    <Todo
      key={todo.id}
      todo={todo.text}
      index={todo.id}
      deleteTodo={deleteTodo}
    />
  ));
}

export default TodoList;
