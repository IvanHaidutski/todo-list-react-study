import styles from "./Todo.module.css";
import { ReactComponent as DeleteIcon } from "../icons/icon_trashcan_gray.svg";
import { ReactComponent as CheckIcon } from "../icons/icon_checkmark_gray.svg";
import { ReactComponent as ListIcon } from "../icons/icon_list.svg";

function Todo({
  id,
  todo,
  deleteTodo,
  toggleTodo,
  dragStartHandler,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
}) {
  return (
    <div
      className={`${styles.todoItem} ${
        todo.isCompleted == true ? styles.completedTodo : ""
      }`}
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, todo)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, todo)}
      onDoubleClick={(e) => deleteTodo(id)}
    >
      <ListIcon className={styles.listIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <DeleteIcon
        className={styles.deleteIcon}
        onClick={(e) => deleteTodo(id)}
      />
      <CheckIcon className={styles.checkIcon} onClick={(e) => toggleTodo(id)} />
    </div>
  );
}

export default Todo;
