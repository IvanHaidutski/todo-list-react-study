import { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodosActions from "./Components/TodosActions";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const toDoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
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
        return todo.isCompleted;
      })
    );
  };

  const resetTodos = () => {
    setTodos([]);
  };

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
          />
        )}
        {!todos.length ? (
          <div className="isEmptyText">Todolist is empty!</div>
        ) : (
          <TodoList
            todos={todos}
            deleteTodo={deleteDoHandler}
            toggleTodo={toggleDoHandler}
          />
        )}
      </div>
    </div>
  );
}

export default App;
