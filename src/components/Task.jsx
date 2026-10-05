import { format } from 'date-fns';
function Task({
  description = 'Task',
  created = new Date(),
  completed = false,
  onToggle,
}) {
  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">{format(created, 'PPpp')}</span>
        </label>
        <button className="icon icon-edit" aria-label="Edit task"></button>
        <button className="icon icon-destroy" aria-label="Delete task"></button>
      </div>
      <input type="text" className="edit" />
    </li>
  );
}

export default Task;
