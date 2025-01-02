"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const [activeFilter, setActiveFilter] = useState("all");
  const [taskCompleted, setTaskCompleted] = useState(
    "No tasks yet. Add one above!"
  );
  const [clearCompleted, setClearCompleted] = useState("Clear completed");

  const addTodoHandler = () => {
    // if (
    //   event.type === "click" ||
    //   (event.type === "keydown" && event.key === "Enter")
    // )

    //  {
    // if (newTodo !== "") {
    setTodos([...todos, { title: newTodo, isCompleted: false }]);
    // setNewTodo("");
    // }
    // }
  };

  // const checkBoxHandler = () => {};
  // [1,2,3,4,5]
  const deleteHandler = (index) => {
    alert("are you sure to delete ?");
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  useEffect(() => {
    if (todos.length === 0) {
      setTaskCompleted("No tasks yet. Add one above!");
    } else {
      setTaskCompleted(todos.length);
    }
  }, []);

  const toggleIsCompleted = (incomingTodo) => {
    let changedTodos = todos.map((t) => {
      if (t.title === incomingTodo.title) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });

    // console.log(changedTodos);
    setTodos(changedTodos);
  };

  // function clearCompletedHandler() {
  //   if (toggleIsCompleted.changedTodos.isCompleted == true) {
  //     toggleIsCompleted.changedTodos.isCompleted.splice(0, length);
  //   }
  // }

  // console.log("hahhahah", todos.isCompleted);

  const clearCompletedHandler = () => {
    const reamainingTodos = todos.map((todo) => {
      // todo.isCompleted
      if (todo.isCompleted) {
        return todo;
      }
    });
    setTodos(...reamainingTodos);
    alert("Are you sure you want to clear all completed tasks?");
    // if (todos.isCompleted == true) {
    //   todos.splice(0, length - 1);
    //   setTodos([...todos]);
    //   // console.log(todos);
    //   alert("Are you sure you want to clear all completed tasks?");
    // }
  };

  // const clearCompletedd = () => {
  //   if (todos.length === 0) {
  //     setClearCompleted("Clear completed ");
  //   } else {
  //     // setClearCompleted(todos.splice(index, 1)(setTodos([...todos])));
  //     const haha = (index) => {
  //       todos.splice(index, 1);
  //       setTodos([...todos]);
  //     };

  //     setClearCompleted(haha, " ");
  //     alert("Are you sure you want to clear all completed tasks?");
  //   }
  // };

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
            // onKeyDown={addTodoHandler}
          />
          <button onClick={addTodoHandler}>Add</button>
        </div>
        <div className={`${styles.flex} ${styles["sorts"]}`}>
          <div className={styles.all}>
            <button
              className={`${activeFilter == "all" && styles.activeStyle}`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
          </div>
          <div>
            <button
              className={`${activeFilter == "active" && styles.activeStyle}`}
              onClick={() => setActiveFilter("active")}
            >
              Active
            </button>
          </div>
          <div>
            <button
              className={`${activeFilter == "completed" && styles.activeStyle}`}
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
                <input
                  type="checkbox"
                  onChange={() => toggleIsCompleted(todo)}
                  checked={todo.isCompleted}
                />
                <p>{todo.title}</p>
              </div>
              <div>
                <button onClick={() => deleteHandler(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.parag}>
          <p>{taskCompleted}</p>
          <button onClick={() => clearCompletedHandler()}>
            {/* {clearCompleted} */}
            clear completed
          </button>
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
