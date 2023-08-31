import TodoItem from "./TodoItem";
import styles from "../css/TodoList.module.css";
const TodoList = (props) => {
  console.log(props,'props')
  return (
    <>
      <ul className={styles.listContainer}>
        {props.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={props.onToggle}
              onDeleteTodo={props.onDeleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
