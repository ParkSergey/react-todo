import { formatDistanceToNow } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function Task({
  title = 'Task',
  created = new Date(),
  completed = false,
  onToggle,
  onDelete,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(title);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      editInputRef.current?.focus();
    }
  }, [isEditing]);

  function startEditing() {
    setDraft(title);
    setIsEditing(true);
  }

  function saveEdit() {
    const newTitle = draft.trim();
    if (newTitle) {
      onEdit(newTitle);
    }
    setIsEditing(false);
  }

  function cancelEdit() {
    setDraft(title);
    setIsEditing(false);
  }

  return (
    <li
      className={`${completed ? 'completed ' : ''}${isEditing ? 'editing' : ''}`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />
        <label>
          <span className="description">{title}</span>
          <span className="created">
            {formatDistanceToNow(created, { addSuffix: true })}
          </span>
        </label>
        <button
          className="icon icon-edit"
          type="button"
          aria-label="Edit task"
          onClick={startEditing}
        ></button>
        <button
          className="icon icon-destroy"
          type="button"
          aria-label="Delete task"
          onClick={onDelete}
        ></button>
      </div>
      <input
        ref={editInputRef}
        type="text"
        className="edit"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            saveEdit();
          } else if (event.key === 'Escape') {
            cancelEdit();
          }
        }}
      />
    </li>
  );
}
Task.defaultProps = {
  title: 'Task',
  created: new Date(),
  completed: false,
};
Task.propTypes = {
  title: PropTypes.string,
  created: PropTypes.instanceOf(Date),
  completed: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default Task;
