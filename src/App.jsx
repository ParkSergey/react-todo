import './App.css';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Completed task',
      created: new Date(),
      completed: true,
    },
    {
      id: 2,
      description: 'Editing task',
      created: new Date(),
      completed: false,
    },
    {
      id: 3,
      description: 'Active task',
      created: new Date(),
      completed: false,
    },
  ]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function toggleTask(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddTask={addTask} />
      </header>

      <section className="main">
        <TaskList tasks={tasks} onToggleTask={toggleTask} />
        <Footer />
      </section>
    </section>
  );
}

export default App;
