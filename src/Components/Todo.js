import styles from "./Todo.module.css";
import TodoForm from "./TodoForm";

function Todo() {
  return (
    <div className={styles.todoWrapper}>
      <h1 className={styles.titleTodo}>Todo App</h1>
      <div className={styles.devider}></div>
      <TodoForm />
    </div>
  );
}

export default Todo;
