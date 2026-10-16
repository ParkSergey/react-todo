import './App.css';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import { useState } from 'react';
import TaskArray from './components/TaskArray';

function App() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([
    ...TaskArray.map((task) => ({
      ...task,
      completed: false,
    })),
    {
      id: custom -
        1,
      description: 'Completed task',
      created: new Date(),
      completed: false,
    },
    {
      id:custom-2,
      description: 'Editing task',
      created: new Date(),
      completed: false,
    },
    {
      id:custom-3,
      description: 'Active task',
      created: new Date(),
      completed: false,
    },
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
  function addTask(description) {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        description,
        created: new Date(),
        completed: false,
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

  function editTask(id, newDescription) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            description: newDescription,
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
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              addTask(event.target.value);
              event.target.value = '';
            }
          }}
        />
      </header>

      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />
       

        
        <Footer tasks={tasks}
          filter={filter}
        setFilter={setFilter}/>
      </section>
    </section>
  );
}

export default App;
