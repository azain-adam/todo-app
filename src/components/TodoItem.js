import styles from "../css/TodoItem.module.css";

const TodoItem = (props) => {
  console.log("Priority:", props.todo.priority);
  const handleToggle = () => {
    props.onToggle(props.todo.id);
  };

  const handleDelete = () => {
    props.onDeleteTodo(props.todo.id);
  };

  //   const priorityStyles = {
  //     high: { backgroundColor: "#e74c3c", color: "white" }, // Red color for high priority
  //     medium: { backgroundColor: "#f39c12", color: "white" }, // Orange color for medium priority
  //     low: { backgroundColor: "#2ecc71", color: "white" }, // Green color for low priority
  //   };

  return (
    <>
      <li
        className={`${styles.todoItem} ${
          props.todo.completed ? styles.completed : ""
        }`}
      >
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={handleToggle}
          checked={props.todo.completed}
        />
        <span>{props.todo.text}</span>
        <span
          className={`${styles.priority} ${
            props.todo.priority === "high"
              ? styles.highPriority
              : props.todo.priority === "medium"
              ? styles.mediumPriority
              : styles.lowPriority
          }`}
        >
          {props.todo.priority}
        </span>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
