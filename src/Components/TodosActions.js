import Button from "../UI/Button";
import styles from "./TodosActions.module.css";
import { ReactComponent as ResetIcon } from "../icons/icon_refresh.svg";
import { ReactComponent as DeleteAllIcon } from "../icons/icon_trashcan.svg";

function TodosActions({ resetTodos, deleteCompletedTodos }) {
  return (
    <div className={styles.actionsWrapper}>
      <Button onClick={resetTodos}>
        <ResetIcon className={styles.resetIcon} />
      </Button>
      <Button onClick={deleteCompletedTodos}>
        <DeleteAllIcon className={styles.deleteAllIcon} />
      </Button>
    </div>
  );
}

export default TodosActions;
