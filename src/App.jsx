import './App.css';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import { useState } from 'react';
import TaskArray from './components/TaskArray';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([
    ...TaskArray.map((task) => ({
      ...task,
      completed: false,
      created: new Date(),
    })),
  ]);
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed;
    }
    if (filter === 'completed') {
      return task.completed;
    }
    return true;
  });
  function addTask(title) {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        title: trimmedTitle,
        completed: false,
        created: new Date(),
      },
    ]);
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      }),
    );
  }
  function deleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }
  const clearCompleted = () => {
    setTasks((currentTasks) => currentTasks.filter((task) => !task.completed));
  };

  function editTask(id, newDescription) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: newDescription,
          };
        }

        return task;
      }),
    );
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddTask={addTask} />
      </header>

      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />
        <Footer tasks={tasks} filter={filter} setFilter={setFilter} onClearCompleted={clearCompleted} />
      </section>
    </section>
  );
  
}

export default App;
