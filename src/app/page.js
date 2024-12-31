"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const addTodoHandler = (event) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      if (newTodo.trim() !== "") {
        setTodos([...todos, newTodo]);
        setNewTodo("");
      }
    }
  };

  // const checkBoxHandler = () => {};
  // [1,2,3,4,5]
  const deleteHandler = (index) => {
    alert("are you sure to delete ?");
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  return (
    <div className={styles.bdy}>
      <div className={styles[`todo-container`]}>
        <h1>To-Do list</h1>
        <div className={`${styles.flex} ${styles["task"]}`}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={addTodoHandler}
          />
          <button onClick={addTodoHandler}>Add</button>
        </div>
        <div className={`${styles.flex} ${styles["sorts"]}`}>
          <div className={styles.all}>
            <button
              className={activeFilter == "all" && styles.activeStyle}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
          </div>
          <div>
            <button
              className={activeFilter == "active" && styles.activeStyle}
              onClick={() => setActiveFilter("active")}
            >
              Active
            </button>
          </div>
          <div>
            <button
              className={activeFilter == "completed" && styles.activeStyle}
              onClick={() => setActiveFilter("completed")}
            >
              Completed
            </button>
          </div>
        </div>
        <div>
          {todos.map((todo, index) => (
            <div key={index} className={styles.tasks}>
              <div className={`${styles.flex} ${styles.tasksleft}`}>
                <input type="checkbox" />
                <p>{todo}</p>
              </div>
              <div>
                <button onClick={() => deleteHandler(index)}>Delete</button>
              </div>
            </div>
          ))}
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
