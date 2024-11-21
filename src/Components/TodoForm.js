import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.todoForm} onSubmit={onSubmitHandler}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button className={styles.inputButton}>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
