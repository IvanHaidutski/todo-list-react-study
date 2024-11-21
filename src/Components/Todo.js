import styles from "./Todo.module.css";
import listIcon from "../icons/icon_list.svg";

function Todo({ index, todo, deleteTodo }) {
  return (
    <div className={styles.todoItem} onDoubleClick={(e) => deleteTodo(index)}>
      <img src={listIcon} />
      {todo}
    </div>
  );
}

export default Todo;
