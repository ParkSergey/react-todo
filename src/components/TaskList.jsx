import Task from './Task';
function TaskList({ tasks, onToggleTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          description={task.description}
          created={task.created}
          completed={task.completed}
          onToggle={() => onToggleTask(task.id)}
        />
      ))}
    </ul>
  );
}
export default TaskList;
