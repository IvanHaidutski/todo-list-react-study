import styles from "./TodoForm.module.css";

function TodoForm() {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.todoForm}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter new todo"
        ></input>
        <button className={styles.inputButton}>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
