import TasksFilter from './TasksFilter';
function Footer({ tasks, setFilter, filter, onClearCompleted }) {
  const activeTasks = tasks.filter((task) => !task.completed);
  return (
    <footer className="footer">
      <span className="todo-count">{activeTasks.length} items left</span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button onClick={onClearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}
export default Footer;
