import styles from "./TodoList.module.css";
import Todo from "./Todo";

function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
  dragStartHandler,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
}) {
  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return todos
    .sort(sortCards)
    .map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        id={todo.id}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        dragStartHandler={dragStartHandler}
        dragEndHandler={dragEndHandler}
        dragOverHandler={dragOverHandler}
        dropHandler={dropHandler}
      />
    ));
}

export default TodoList;
