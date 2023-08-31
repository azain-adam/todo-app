import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import styles from './css/App.module.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  
  const handleAddTodos = (text, priority) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      priority,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggle = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }))
  }

  const handleDelete = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>To-do List</h1>
      <TodoForm onAddTodos={(text, priority) => handleAddTodos(text, priority)} />
      <TodoList todos={todos} onToggle={handleToggle} onDeleteTodo={handleDelete}/>
    </div>
  );
};

export default App;
