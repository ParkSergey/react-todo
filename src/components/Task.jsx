import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';

function Task({
  description = 'Task',
  created = new Date(),
  completed = false,
  onToggle,
  onDelete,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(description);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      editInputRef.current?.focus();
    }
  }, [isEditing]);

  function startEditing() {
    setDraft(description);
    setIsEditing(true);
  }

  function saveEdit() {
    const newDescription = draft.trim();
    if (newDescription) {
      onEdit(newDescription);
    }
    setIsEditing(false);
  }

  function cancelEdit() {
    setDraft(description);
    setIsEditing(false);
  }

  return (
    <li className={`${completed ? 'completed ' : ''}${isEditing ? 'editing' : ''}`}>
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

export default Task;
