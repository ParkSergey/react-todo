import Task from './Task';
function TaskList({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          description={task.description}
          created={task.created}
          completed={task.completed}
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
          onEdit={(newDescription) => onEditTask(task.id, newDescription)}
        />
      ))}
    </ul>
  );
}
export default TaskList;
