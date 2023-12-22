// TaskItem.js
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TaskItem = ({ task, index }) => {
  const getItemStyle = (isDragging, draggableStyle) => ({
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "lightgrey",
    transition: isDragging ? "background 0.3s ease" : "none",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <Draggable draggableId={task.id} index={index} key={task.id}>
      {(provided, snapshot) => {
        console.log("provided", snapshot);
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="task-item"
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            {task.content}
          </div>
        );
      }}
    </Draggable>
  );
};

export default TaskItem;
