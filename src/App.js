import { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const toDoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      isComplete: "false",
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };
  const deleteDoHandler = (index) => {
    console.log("DoubleClick");
    setTodos(todos.filter((tododo) => tododo.id != index));
  };

  return (
    <div className="App">
      <div className="todoWrapper">
        <h1 className="titleTodo">Todo App</h1>
        <div className="devider"></div>
        <TodoForm addTodo={toDoHandler} />
        {!todos.length ? (
          <div className="isEmptyText">Todolist is empty!</div>
        ) : (
          <TodoList todos={todos} deleteTodo={deleteDoHandler} />
        )}
      </div>
    </div>
  );
}

export default App;
