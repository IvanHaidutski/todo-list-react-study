import { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodosActions from "./Components/TodosActions";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const toDoHandler = (text, order) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
      order: order,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const deleteDoHandler = (id) => {
    console.log("DoubleClick");
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const toggleDoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const deleteCompletedTodos = () => {
    setTodos(
      todos.filter((todo) => {
        return !todo.isCompleted;
      })
    );
  };

  const resetTodos = () => {
    setTodos([]);
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  const [currentTodo, setCurrentTodo] = useState(null);

  function dragStartHandler(e, todo) {
    console.log("drag", todo);
    setCurrentTodo(todo);
  }

  function dragEndHandler(e) {
    // e.target.style.background = "white";
  }

  function dragOverHandler(e) {
    e.preventDefault();
    // e.target.style.background = "tomato";
  }

  function dropHandler(e, todo) {
    e.preventDefault();
    console.log("drop", todo);
    setTodos(
      todos.map((c) => {
        if (c.id === todo.id) {
          return { ...c, order: currentTodo.order };
        }
        if (c.id === currentTodo.id) {
          return { ...c, order: todo.order };
        }
        return c;
      })
    );
  }

  return (
    <div className="App">
      <div className="todoWrapper">
        <h1 className="titleTodo">Todo App</h1>
        <div className="devider"></div>
        <TodoForm addTodo={toDoHandler} />
        {!!todos.length && (
          <TodosActions
            deleteCompletedTodos={deleteCompletedTodos}
            resetTodos={resetTodos}
            completedTodoExist={!!completedTodosCount}
          />
        )}
        {!todos.length ? (
          <div className="isEmptyText">Todolist is empty!</div>
        ) : (
          <TodoList
            todos={todos}
            deleteTodo={deleteDoHandler}
            toggleTodo={toggleDoHandler}
            dragStartHandler={dragStartHandler}
            dragEndHandler={dragEndHandler}
            dragOverHandler={dragOverHandler}
            dropHandler={dropHandler}
          />
        )}
        {completedTodosCount > 0 && (
          <div className="isEmptyText">{`You have completed ${completedTodosCount} ${
            completedTodosCount > 1 ? `todos` : `todo`
          }`}</div>
        )}
      </div>
    </div>
  );
}

export default App;
