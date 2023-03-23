import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.TodoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {/* {todos.length === 0 && <h2>Todo list is empty</h2>} можно и так */}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
