"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([" "]);
  const [newTodo, setNewTodo] = useState("");

  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = () => {
    alert("are you sure to delete ?");
  };
  return (
    <div className={styles.bdy}>
      <div className={styles[`todo-container`]}>
        <h1>To-Do list</h1>
        <div className={`${styles.flex} ${styles["task"]}`}>
          <input
            type="text"
            placeholder="Add a new task..."
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodoHandler}>Add</button>
        </div>
        <div className={`${styles.flex} ${styles["sorts"]}`}>
          <div className={styles.all}>
            <button>All</button>
          </div>
          <div>
            <button>Active</button>
          </div>
          <div>
            <button>Completed</button>
          </div>
          <button onClick={deleteHandler}>Delete</button>
        </div>
        <div>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </div>

        <div className={styles.parag}>
          <p>No tasks yet. Add one above!</p>
        </div>
        <div>
          <h4>
            Powered by{" "}
            <span style={{ color: "#3c82f6" }}> Pinecone academy </span>
          </h4>
        </div>
      </div>
    </div>
  );
}
