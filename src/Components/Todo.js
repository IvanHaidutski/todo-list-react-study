import styles from "./Todo.module.css";
import { ReactComponent as DeleteIcon } from "../icons/icon_trashcan_gray.svg";
import { ReactComponent as CheckIcon } from "../icons/icon_checkmark_gray.svg";
import { ReactComponent as ListIcon } from "../icons/icon_list.svg";

function Todo({ index, todo, deleteTodo }) {
  return (
    <div className={styles.todoItem} onDoubleClick={(e) => deleteTodo(index)}>
      <ListIcon className={styles.listIcon} />
      <div className={styles.todoText}>{todo}</div>
      <DeleteIcon className={styles.deleteIcon} />
      <CheckIcon className={styles.checkIcon} />
    </div>
  );
}

export default Todo;
