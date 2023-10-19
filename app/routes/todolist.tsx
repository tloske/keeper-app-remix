import { useState } from "react";
import InputArea from "~/components/InputArea";
import ToDoItem from "~/components/ToDoItem";

export default function ToDoList() {
  const [taskList, setTaskList] = useState<string[]>([]);

  function addTask(task: string) {
    setTaskList((prevTasks) => {
      return [...prevTasks, task];
    });
  }

  function deleteTask(id: number) {
    setTaskList((prevTasks) => {
      return prevTasks.filter((_task, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <div className="mt-2">
        <h1>To-Do-List</h1>
      </div>
      <InputArea addTask={addTask} />
      <div>
        <ul className="list-group mt-1">
          {taskList.map((task, i) => (
            <ToDoItem
              key={i}
              id={i}
              className="list-group-item"
              text={task}
              onClick={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
