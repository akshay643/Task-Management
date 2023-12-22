import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { DragDropContext } from "react-beautiful-dnd";
// Function to reorder tasks within a list

const App = () => {
  const [tasks, setTasks] = useState({
    Added: [],
    Started: [],
    Completed: [],
  });

  const addTask = (content) => {
    const newTask = { id: Date.now().toString(), content };
    setTasks((prevTasks) => ({
      ...prevTasks,
      Added: [...prevTasks.Added, newTask],
    }));
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    // Dropped outside the list or in the same position
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    setTasks((prevTasks) => {
      const sourceTasks = [...prevTasks[source.droppableId]];
      const destinationTasks = [...prevTasks[destination.droppableId]];

      // If dragged within the same list
      if (source.droppableId === destination.droppableId) {
        const [movedTask] = sourceTasks.splice(source.index, 1);
        sourceTasks.splice(destination.index, 0, movedTask);

        const updatedTasks = {
          ...prevTasks,
          [source.droppableId]: sourceTasks,
        };

        return updatedTasks;
      }

      // If dragged to a different list
      const [movedTask] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, movedTask);

      const updatedTasks = {
        ...prevTasks,
        [source.droppableId]: sourceTasks,
        [destination.droppableId]: destinationTasks,
      };

      return updatedTasks;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <TaskForm addTask={addTask} />
        <div className="task-list-container">
          <TaskList tasks={tasks.Added} category="Added" />
          <TaskList tasks={tasks.Started} category="Started" />
          <TaskList tasks={tasks.Completed} category="Completed" />
        </div>
      </div>
    </DragDropContext>
  );
};

export default App;
