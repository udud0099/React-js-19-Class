import { useState } from "react";
import style from "./ToDoListMy.module.css";

const ToDoListMy = () => {
  const [tasks, setTasks] = useState([
    "Wash Disk",
    "buy Head Phone",
    "pen",
    "Clean Room",
  ]);

  function addToDo() {
    let newTask = document.getElementById("addToDo").value;
    if (newTask.trim() == "") {
      document.getElementById("addToDo").value = "";
      return;
    }

    setTasks((t) => [newTask, ...t]);

    document.getElementById("addToDo").value = "";
  }
  function removeToDo(i) {
    setTasks(tasks.filter((e, index) => i !== index));
  }
  function moveUp(i) {
    // console.log("print", tasks[i]);
    if (i == 0) {
      // console.log("print", tasks[i]);
      return;
    }

    setTasks((t) => {
      const swapTask = [...t];
      [swapTask[i], swapTask[i - 1]] = [swapTask[i - 1], swapTask[i]];
      // setTasks(swapTask);
      return swapTask;
    });
  }
  function moveDown(i) {
    // console.log("print", tasks[i]);
    if (i == tasks.length - 1) {
      // console.log("print", tasks[i]);
      return;
    }

    setTasks((t) => {
      const swapTask = [...t];
      [swapTask[i + 1], swapTask[i]] = [swapTask[i], swapTask[i + 1]];
      // setTasks(swapTask);
      return swapTask;
    });
  }
  return (
    <>
      <h1>To Do List My</h1>
      <div>
        <input id="addToDo" type="text" placeholder="Add new text" />
        <button onClick={addToDo}>Add</button>
      </div>
      <div className={style.todolist}>
        {tasks.map((task, i) => (
          <span key={i}>
            <h1>
              {i + 1}. {task}
            </h1>{" "}
            <h3 onClick={() => removeToDo(i)}>del</h3>{" "}
            <h3 onClick={() => moveUp(i)}>^</h3>{" "}
            <h3 onClick={() => moveDown(i)}>!</h3> <br />
          </span>
        ))}
      </div>
    </>
  );
};

export default ToDoListMy;
