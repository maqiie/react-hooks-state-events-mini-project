import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task key={task.text} text={task.text} category={task.category} onDelete={() => 
        handleDelete(index)} />
      ))}
    </div>
  );
}

export default TaskList;
