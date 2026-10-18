function NewTaskForm({ onAddTask }) {
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          onAddTask(event.target.value);
          event.target.value = '';
        }
      }}
    />
  );
}

export default NewTaskForm;
