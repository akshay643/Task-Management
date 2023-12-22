// components/TaskForm.js
import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskContent, setTaskContent] = useState("");

  const handleAddTask = () => {
    if (taskContent.trim() !== "") {
      addTask(taskContent);
      setTaskContent("");
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter task"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
