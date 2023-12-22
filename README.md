
# Project Task Management App

This project is a basic task management application built using React, featuring drag-and-drop functionality for organizing tasks into different categories (Added, Started, Completed). The application follows best practices in terms of code structuring, optimization, and responsible component division.


# Features 

Add tasks to the "Added" category.
Organize tasks into different categories (Added, Started, Completed).
Drag-and-drop functionality for reordering tasks within each category.
Responsive design for a seamless user experience.
Utilizes the react-beautiful-dnd library for efficient drag-and-drop.

[Demo](https://task-management-react-teal.vercel.app/)

## Installation

Install my-project with npm

Clone the repository:

```bash
git clone https://github.com/your-username/react-task-management.git
```
Navigate to the project directory:

```bash
  cd react-task-management
  cd cd react-task-management
```
Install dependencies:

```bash
npm install
```

## Usage

Run the application:

```bash 
npm start
```
# Optimization
* Efficiently implemented drag-and-drop functionality using react-beautiful-dnd.

* Minimized unnecessary re-renders through React functional components and hooks.

# Responsibility Division
* Divided the application into components like TaskList, TaskItem, and TaskForm.
* Ensured each component has a single responsibility.

# Architecture
* Implemented a clear parent-child component structure for better maintainability.
* Used props for data flow between components.

# Data Flow
* Ensured a unidirectional data flow within the application.
Utilized local state to manage task data.
* Implemented the ability to move tasks between categories via drag-and-drop.

# Data Storage
* Stored task data in local state.

# Latest Tools and Libraries
* Used the latest stable version of React.
* Implemented styling using CSS for simplicity.

# Acknowledgments
* Special thanks to the creators of react-beautiful-dnd for providing a fantastic drag-and-drop library.
