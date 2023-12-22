// TaskList.js
import React from "react";
import TaskItem from "./TaskItem";
import { Droppable } from "react-beautiful-dnd";

const TaskList = ({ tasks, category }) => {
  return (
    <Droppable droppableId={category} key={category}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="task-list"
          //   style={{ padding: "1rem" }}
        >
          <h3>{category}</h3>
          {tasks.map(
            (task, index) =>
              task && <TaskItem key={task.id} task={task} index={index} />
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
