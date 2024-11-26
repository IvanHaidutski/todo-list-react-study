import styles from "./TodoList.module.css";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return todos.map((todo) => (
    <Todo
      key={todo.id}
      todo={todo}
      id={todo.id}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />
  ));
}

export default TodoList;
