import Task from './Task';
import PropTypes from 'prop-types';
function TaskList({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
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
TaskList.defaultProps = {
  tasks: [],
  onToggleTask: () => {},
  onDeleteTask: () => {},
  onEditTask: () => {},
};
TaskList.propTypes = {
  tasks: PropTypes.array,
  onToggleTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onEditTask: PropTypes.func,
};
export default TaskList;
