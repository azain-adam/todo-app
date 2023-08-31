import React, { useState } from "react";
import styles from "../css/TodoForm.module.css";

const TodoForm = (props) => {
  const [newTodoText, setNewTodoText] = useState("");
  const [priority, setPriority] = useState("low");

  const handleInputChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodoText.trim() !== "") {
      props.onAddTodos(newTodoText,priority);
      setNewTodoText("");
    }
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div>
          <label className={styles.formLabel} htmlFor="to-do">
            Add a new To-do
          </label>
          <input
            className={styles.inputField}
            type="text"
            value={newTodoText}
            onChange={handleInputChange}
            placeholder="Add your text here."
          />
        </div>
        <div>
          <select
            className={styles.prioritySelect}
            value={priority}
            onChange={handlePriority}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>
        <div>
          <button className={styles.addButton} type="submit">
            Add To-do
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
