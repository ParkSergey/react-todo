import TasksFilter from './TasksFilter';
import PropTypes from 'prop-types';
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
Footer.defaultProps = {
  tasks: [],
  filter: 'all',
  setFilter: () => { },
  onClearCompleted: () => { },
};
Footer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    created: PropTypes.instanceOf(Date).isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  onClearCompleted: PropTypes.func,
};
export default Footer;
